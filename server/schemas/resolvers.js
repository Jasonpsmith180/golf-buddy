const { AuthenticationError } = require('apollo-server-express');
const { User, Score } = require('../models');

// import sign token
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('scores')
                    .populate('friends');
                
                return userData;
            }
            
            throw new AuthenticationError('Not logged in');
        },
        scores: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Score.find(params).sort({ createdAt: -1 });
        },
        score: async (parent, { _id }) => {
            return Score.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('scores');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('scores');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addScore: async (parent, args, context) => {
            if (context.user) {
                const score = await Score.create({ ...args, username: context.user.username });
                
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { scores: score._id } },
                    { new: true }
                );
                    
                return score;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { scoreId, commentBody }, context) => {
            if (context.user) {
                const updatedScore = await Score.findOneAndUpdate(
                    { _id: scoreId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );
            
                return updatedScore;
            }
                
            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');
            
                return updatedUser;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers
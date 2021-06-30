import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';
import CommentList from '../components/ScoreList';

const Home = () => {
    // use useQuery hook to make request
    const { loading, data } = useQuery(QUERY_COMMENTS);

    const comments = data?.comments || [];
    console.log(comments);

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div className='col-12 mb-3'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <CommentList comments={comments} title="Recent Scores" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
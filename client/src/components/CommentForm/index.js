import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const CommentForm = ({ scoreId }) => {

    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 100) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { scoreId, commentBody }
            });

            setBody('');
            setCharacterCount(0);
        } catch(e) {
            console.error(e);
        }
    };

    return (
        <div className="bg-light mb-4 card">
            <p className={`"m-0" ${characterCount === 100 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/100
                {error && <span className='ml-2'>Something went wrong...</span>}
            </p>
            <form className="fex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}>
                <textarea
                    placeholder="Leave a comment about this score"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
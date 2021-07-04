import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../../utils/mutations';
import { QUERY_ME, QUERY_SCORES } from '../../utils/queries';

const ScoreForm = () => {

    const [score, setScore] = useState('');
    const [par, setPar] = useState('');
    const [course, setCourse] = useState('');

    const [addScore, { error }] = useMutation(ADD_SCORE, {
        update(cache, { data: { addScore } }) {
            try {
                const { scores } = cache.readQuery({ query: QUERY_SCORES });
                
                cache.writeQuery({
                    query: QUERY_SCORES,
                    data: { scores: [addScore, ...scores] }
                });
            } catch (e) {
                console.error(e);
            }
            
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, scores: [...me.scores, addScore] } }
            });
        }
    });

    const handleScoreChange = event => {
        setScore(event.target.value);
    };

    const handleParChange = event => {
        setPar(event.target.value);
    }
    
    const handleCourseChange = event => {
        setCourse(event.target.value);
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addScore({
                variables: { score: parseInt(score), par: parseInt(par), course }
            });

            // clear form
            setScore('');
            setPar('');
            setCourse('');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Your Score'
                    name='score'
                    type='text'
                    id='score'
                    value={score}
                    onChange={handleScoreChange}
                />
                <input
                    className='form-input'
                    placeholder='Course Par'
                    name='par'
                    type='text'
                    id='par'
                    value={par}
                    onChange={handleParChange}
                />
                <input
                    className='form-input'
                    placeholder='Course'
                    name='course'
                    type='text'
                    id='course'
                    value={course}
                    onChange={handleCourseChange}
                />
                <button className='btn d-block w-100' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ScoreForm;
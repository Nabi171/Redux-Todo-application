import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../Redux/actions/todoAction';


const TodosApp = () => {
    const { isLoading, todos, error } = useSelector((state) => state);
    console.log(todos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos());
    }, []);
    return (
        <div>
            <h2>Todos app</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <h1>The total spots:{todos.length}</h1>
            {/* 
            {
                todos.map(todo =>
                    <p>{todo.sports}</p>
                )
            } */}

        </div>
    );
};

export default TodosApp;
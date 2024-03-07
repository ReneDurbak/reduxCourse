import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos() {
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()




    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 gap-4">
                {todos.map(todo => (
                    <div key={todo.id} className="bg-gray-100 p-4 rounded-md shadow-md flex space-x-20 justify-between items-center">
                        <span>{todo.text}</span>
                        <button
                            className="p-2 rounded-xl bg-red-400 text-white hover:bg-red-600 focus:outline-none ease-in-out duration-300"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

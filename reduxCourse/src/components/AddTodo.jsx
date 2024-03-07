import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="flex justify-center mt-8">
            <form className="flex space-x-4" onSubmit={addTodoHandler}>
                <input
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none" type="submit">
                    Add todo
                </button>
            </form>
        </div>
    )
  }
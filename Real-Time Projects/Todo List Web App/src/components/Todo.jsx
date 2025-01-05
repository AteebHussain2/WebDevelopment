import { React, useState, useEffect } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setShowFinished] = useState(true)

    const time = () => {
        const date = new Date();
        const showTime = date.getFullYear()
            + "-" + date.getMonth()
            + "-" + date.getDate()
            + " " + date.getHours()
            + ":" + date.getMinutes();
        return showTime
    }

    useEffect(() => {
        let todosString = localStorage.getItem("todos")
        if (todosString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
        }
    }, [])

    const saveToLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log(`Saving to local storage....`)
    }

    const handleAdd = () => {
        setTodos([...todos, { todo, description, id: uuidv4(), isCompleted: false, time: time() }])
        setTodo("")
        setDescription("")
        saveToLS()
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(item => item.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLS()
    }


    const handleDelete = (e, id) => {
        let bool = confirm(`Are you sure you want to delete this todo?`)
        if (bool) {
            let newTodos = todos.filter(item => {
                return item.id !== id
            });
            setTodos(newTodos)
            saveToLS()
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'todo') {
            setTodo(e.target.value);
        } else if (e.target.name === 'description') {
            setDescription(e.target.value);
        }
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
        saveToLS()
    }

    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }


    return (
        <div className='flex flex-col gap-10 py-20'>
            <div className='bg-slate-100 flex flex-col md:max-w-screen-md w-full max-h-fit gap-4 m-auto p-8 rounded-md items shadow-md md:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]'>
                <input onChange={handleChange} value={todo} className='bg-slate-100 border border-slate-300 focus:border-indigo-500 w-full rounded-full px-6 py-2 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] transition-all outline-none focus:outline-none' required type="text" name="todo" id="todo" placeholder='Create a New Todo....' maxLength={55} />
                <textarea onChange={handleChange} value={description} className='bg-slate-100 border border-slate-300 focus:border-indigo-500 w-full h-24 rounded-md px-6 py-2 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] transition-all outline-none focus:outline-none' type="text" name="description" id="description" placeholder='Write Your Task Description....' maxLength={200} />
                <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-600 hover:bg-violet-800 disabled:bg-opacity-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-white font-bold w-fit m-auto px-4 py-2 rounded-full flex gap-2 items-center'><span>Create Todo</span><IoIosAddCircleOutline className='w-6 h-6' /></button>
            </div>
            <div className='todos bg-slate-100 lg:max-w-screen-lg w-full rounded-md min-h-96 max-h-fit m-auto flex flex-col shadow-md lg:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]'>
                {todos.length !== 0 &&
                    <div className='flex flex-col items-start gap-4 py-4 px-6'>
                        <p className='text-3xl font-bold'>Your Todos</p>
                        <span className='flex items-center gap-2 font-semibold'>
                            <label className="switch">
                                <input type="checkbox" onChange={toggleFinished} checked={showFinished} />
                                <span className="slider round"></span>
                            </label>
                            Show Finished
                        </span>
                    </div>}
                {todos.length === 0 && <div className='mx-auto p-8 text-center text-red-600 text-lg'>You have '0' todos to display. Create a todo to get started.</div>}
                {todos.map(item => {
                    return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex flex-col gap-2 w-full h-fit py-4 px-6 hover:bg-slate-300 hover:shadow-md transition-all rounded-md">
                        <div className="top-content flex flex-row gap-4 items-start lg:items-center">
                            <input onChange={handleCheckbox} type="checkbox" name={item.id} id="" checked={item.isCompleted} className='w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 mt-1.5' />
                            <div className="top-text w-full flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-0 lg:justify-between">
                                <span className='title font-medium text-lg md:text-xl lg:text-2xl'>{item.todo}</span>
                                <p className='lg:pl-9 lg:pr-48 lg:hidden block text-gray-700 text-sm font-normal text-wrap text-clip'>{item.description}</p>
                                <span className='text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-lg hidden lg:inline'>
                                    Created: {item.time}
                                </span>
                            </div>
                        </div>
                        <div className="bottom lg:flex justify-between hidden">
                            <p className='pl-9 pr-48 text-gray-700 text-sm font-normal text-wrap text-clip'>{item.description}</p>
                            <span className='flex gap-4 items-center'>
                                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-white px-2 py-2 rounded-full"><FaRegEdit className="h-4 w-4" /></button>
                                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-white px-2 py-2 rounded-full"><MdDeleteOutline className="h-4 w-4" /></button>
                            </span>
                        </div>
                        <div className='flex sm:flex-row flex-col gap-4 items-end sm:items-center justify-between lg:hidden'>
                            <span className='text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-lg'>
                                Created: {item.time}
                            </span>
                            <span className='flex items-center gap-2'>
                                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-white px-2 py-2 rounded-full"><FaRegEdit className="h-4 w-4" /></button>
                                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-white px-2 py-2 rounded-full"><MdDeleteOutline className="h-4 w-4" /></button>
                            </span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todo
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Edit, Trash2 } from "lucide-react"
import toast from 'react-hot-toast';
import axios from "axios"

const TODO = () => {
  const [todo, setTodo] = useState("") //Users Todo
  const [todos, setTodos] = useState([]) // User list of todo or array of todo

  const getTodo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todo/getTodo")
      console.log('Response from DB', response.data.data);
      setTodos(response.data.data)
    } catch (error) {
      console.log('Error in getting data from DB', error.message);
    }
  }

  useEffect(() => {
    getTodo();
  }, [])
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  
  const handleSubmit = async () => {
    if (todo == "") {
      toast.error("Field is empty",{
        duration: 2000
      })
    }
    try {
      const response = await axios.post("http://localhost:5000/api/todo/saveTodo", { todo })
      // console.log('Todo saved in DB', response.data);
      // setTodos([...todos, response.data.todo]);
      setTodos([...todos, response.data.newTodo]);
      setTodo("")
      // console.log([...todos, newTodo]);
      getTodo()
    } catch (error) {
      console.log('Error in saving data: ', error.message);
    }
  }

  // Function run when enter key is pressed
  const fireEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const deleteTodo =(id) => {
    const confimed = confirm("Do you really want to delete it?")
    if(confimed){
      const response = axios.delete(`http://localhost:5000/api/todo/deleteTodo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
      console.log('Data you want to delete is:',id);
      toast.success("Todo deleted successfully",{
        duration: 2000
      })
    }
  }

  const editTodo = async(id, name) => {
    console.log('Editing the todo from id:', id);
    setTodo(name)
    const response = axios.delete(`http://localhost:5000/api/todo/deleteTodo/${id}`);
    setTodos(todos.filter((todo)=> todo._id !== id))
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='md:max-w-screen-md max-w-md w-full relative mx-auto'
      >
        <h1 className='text-4xl text-blue-900 flex justify-center my-5 font-mono font-bold '>To-Do-List</h1>
        <div className='md:w-full mt-10 py-3 mx-1 md:mx-0 px-3 text-xl bg-custom-white rounded-md flex justify-center'>
          <input onKeyDown={fireEnter} type="text" value={todo} onChange={handleChange} className='bg-transparent w-full outline-none' placeholder='What you want to do?' />
          <button onClick={handleSubmit} className='bg-indigo-500 text-white backdrop-filter backdrop-blur-xl py-2 px-5 rounded-lg shadow-lg shadow-indigo-500/50 hover:border hover:border-indigo-950 font-poppins font-bold'>Add</button>
        </div>
      </motion.div>


      <div className='max-w-md mx-auto mt-3 grid grid-cols-2 gap-0 md:grid-cols-3 md:gap-0 md:max-w-3xl lg:grid-cols-4 lg:max-w-5xl'>
        {
          todos && todos.length > 0 ? (
            todos.map((todo, index) => {
              return <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className='bg-gradient-to-br from-slate-950 via-slate-700 to-slate-700 text-white text-sm my-5 md:text-base mx-2 h-48 w-44 md:h-52 md:w-52  backdrop-filter backdrop-blur-xl shadow-lg shadow-slate-500/50 rounded-lg py-3 px-5'
              >
                {/* 'todo.todo' refers to the `todo` object received from the backend.
  The first 'todo' is the object representing each todo item, 
  and the second 'todo' is the property inside that object which contains the todo text.
  This structure helps differentiate between the frontend state and the backend data. */}

                
                {todo.todo}

                <div className='flex gap-8 absolute bottom-8 right-8'>
                  <button className='size-1 text-red-600 transition duration-300 ease-out  hover:scale-125' onClick={() => { deleteTodo(todo._id) }}><Trash2 /></button>
                  <button className='size-1 text-cyan-600 transition duration-300 ease-out  hover:scale-125' onClick={() => { editTodo(todo._id, todo.todo) }}><Edit /></button>
                </div>
              </motion.div>
            })) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='font-serif text-slate-800 text-sm md:text-xl my-36 flex justify-center'
            >
              <p>No task to show</p>
            </motion.div>
          )
        }
      </div>

    </>
  )
}


export default TODO

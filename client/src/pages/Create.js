import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const  handleChange=(e)=>{
            if(e.target.name==='title'){
                setTitle(e.target.value)
            }
            if(e.target.name==='status'){
                setStatus(e.target.value)
            }
            if(e.target.name==='description'){
                setDescription(e.target.value)
            }
    }
    const handleClick=(e)=>{
            e.preventDefault();
            console.log(title)
            console.log(status)
            console.log(description)
            const newTask = { title, status,description };
            axios
              .post('http://localhost:8000/api/task', newTask)
              .then((response) => {
                console.log('New movie added:', response.data);
                // Reset htmlForm fields after successful POST
                setTitle('');
                setStatus('');
                setDescription('')
                console.log(newTask)
                navigate("/tasks/list")
              })
              .catch((error) => {
                console.error('Error adding movie:', error);
              });
    }
  return (
    <>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Task</h1>
   
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Title</label>
            <input value={title} onChange={handleChange} type="text" id="name" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Status</label>
            <input value={status} onChange={handleChange} type="email" id="email" name="status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea value={description}  onChange={handleChange} id="message" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={handleClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Create
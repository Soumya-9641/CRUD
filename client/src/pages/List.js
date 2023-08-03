import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const List = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
          setIsLoading(true);
          axios.get('http://localhost:8000/api/tasks')
          .then(response => {
            setTask(response.data.data);
            console.log(response.data.data)
          })
          .catch(error => {
            console.error('Error fetching movies:', error);
          });
        };
    
        fetchTasks();
      }, []);
      const handleDelete=async (id)=>{
        try {
            await axios.delete(`http://localhost:8000/api/task/${id}`);
            setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
          } catch (error) {
            console.error('Error deleting movie:', error);
            window.alert('Error deleting movie');
          }
      }
  return (
    <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">List Of Task</h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
    {tasks.map(task=>(
        <div key={task._id} className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
         
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> <span className='text-violet-900 font-poppins'>TITLE----</span> {task.title}</h2>
          <p className="leading-relaxed text-base"> <span className='text-violet-900 font-poppins'>DESCRIPTION----</span> {task.description}</p>
          <p className="leading-relaxed text-base"> <span className='text-violet-900 font-poppins'>STATUS----</span> {task.status}</p>
          <div className='flex md:flex-row flex-col'>
          <Link to={`/tasks/update/${task._id}`}>
          <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Update</button>
          </Link>
               
                     <button onClick={()=>handleDelete(task._id)} className="flex mx-auto mt-16 text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
          </div>

        </div>
      </div>
      
    ))}
      
      
    </div>
    
  </div>
</section>
    </>
  )
}

export default List
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { BASE_URL } from '../helper/helper';
const Update = () => {
    const navigate=useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")
    const [description, setDescription] = useState("")
    const handleChange=(e)=>{
        if(e.target.name==='title'){
            setTitle(e.target.value);
        }
        if(e.target.name==='status'){
            setStatus(e.target.value);
        }
        if(e.target.name==='description'){
            setDescription(e.target.value);
        }
      }
    const getMovieById = async (id) => {
        console.log(id);
       await axios.get(`${BASE_URL}/api/task/${id}`)
        .then(response => {
            setTitle(response.data.data.title);
            setStatus(response.data.data.status);
            setDescription(response.data.data.description);
       
          console.log(response.data.data)
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
      };
    useEffect(() => {
        const fetchMovie = async () => {
           await getMovieById(id);
       
        };
    
        fetchMovie();
      }, [id]);

      const handleUpdate=async ()=>{
        
    const payload = { title, status,description };
    console.log(payload);
    try {
        const response = await axios.put(`${BASE_URL}/api/task/${id}`, payload);
        console.log('Updated movie:', response.data.data);
        window.alert('Movie updated successfully');
        setTitle('')
        setStatus('')
        setDescription('')
        navigate("/tasks/list")
        
      } catch (error) {
        console.error('Error updating movie:', error);
        window.alert('Error updating movie');
      }
      }
     
  return (
   <>
     <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Title</label>
            <input onChange={handleChange} value={title}  type="text" id="name" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Status</label>
            <input onChange={handleChange} value={status} type="email" id="email" name="status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea onChange={handleChange} value={description} id="message" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={handleUpdate} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Update</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Update
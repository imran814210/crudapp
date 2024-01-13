import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";


function Home(){
    const[data,setData]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like to delete ?");
        if(confirm){
            axios.delete('http://localhost:5000/users/'+id)
            .then(res=>{
                window.location.reload();
            })
            .catch(err=>{console.log(err)});
        }
    }
    return(
        <div className="flex flex-col items-center bg-orange-300 w-full h-screen">
           <h1 className="text-3xl m-10 underline">List of User</h1>
           <div className="w-75 rounded bg-white border shadow p-4">
            <div className="flex justify-end"> 
                <Link to="/create" className="bg-lime-500 rounded p-1 m-2">ADD+</Link>
                </div>
                <table className="">
                    <thead>
                        <tr className="border-b-2 border-gray-700 hover:bg-slate-200"> 
                            <th className="p-1">ID</th>
                            <th className="p-1">Name</th>
                            <th className="p-1">Email</th>
                            <th className="p-1">Phone</th>
                            <th className="p-1">Website</th>
                            <th className="p-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d,i)=>{
                                   return (
                                    <tr key={i} className=" border-b border-gray-700 hover:bg-slate-200">
                                            <td className="p-1 text-center">{d.id}</td>
                                            <td className="p-1">{d.name}</td>
                                            <td className="p-1">{d.email}</td>
                                            <td className="p-1">{d.phone}</td>
                                            <td className="p-1">{d.website}</td>
                                            <td className="p-1">
                                                <Link to={`/read/${d.id}`} className="rounded bg-lime-400 p-1 mx-1">Read</Link>
                                                <Link to={`/update/${d.id}`} className="rounded bg-blue-600 text-white p-1 mx-1">Edit</Link>
                                                <button onClick={e=>handleDelete(d.id)} className="rounded bg-red-500 text-white p-1">Delete</button>
                                            </td>
                                        </tr>
                                   )
                            })
                        }
                    </tbody>
                </table>
           </div>
        </div>
    )

}export default Home;
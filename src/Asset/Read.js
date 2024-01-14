import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Read(){
    const[data,setData]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        axios.get('http://localhost:5000/users/'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
    return(
        <div className="flex flex-col items-center bg-orange-300 w-full h-screen">
           <h1 className="text-3xl m-10 underline">Details of User</h1>
           <div className="w-75 rounded bg-white border shadow p-4">
                <div className="mb-2">
                    <strong>Name: {data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Email: {data.email}</strong>
                </div>
                <div className="mb-2">
                    <strong>Phone: {data.phone}</strong>
                </div>
                <div className="mb-2">
                    <strong>Website: {data.website}</strong>
                </div>
                <div className="mb-2">
                    <strong>Picture: {data.pictureurl}</strong>
                </div>
                <Link to={`/update/${id}`} className="bg-indigo-400 p-1 m-1 rounded">Edit</Link>
                <Link to='/' className="bg-indigo-400 p-1 m-1 rounded">Back</Link>

            </div>
        </div>
    )

}export default Read;
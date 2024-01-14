import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams,useNavigate } from "react-router-dom";

function Update(){
    const {id}=useParams();
    const navigate=useNavigate();
    const[values,setValues]=useState({
        name:'',
        email:'',
        phone:'',
        website:'',
        pictureurl:''
        })
    useEffect(()=>{
        axios.get('http://localhost:5000/users/'+id)
        .then(res=>setValues(res.data))
        .catch(err=>console.log(err));
    },[id])
    const handleUpdate=(event)=>{
            event.preventDefault();
            axios.put('http://localhost:5000/users/'+id,values)
                .then(res=>{
                    console.log(res);
                    navigate('/')
                })
                .catch(err=>console.log(err));
    }
    return(
        <div className="flex flex-col items-center bg-orange-300 w-full h-screen">
           <h1 className="text-3xl m-10 underline">Update User</h1>
           <div className="w-75 rounded bg-white border shadow p-4">
            <form>
                <div className="mb-2">
                    <label >Name  </label>
                    <input type="text" name="name" value={values.name} onChange={e=>setValues({...values,name:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Name"/>
                </div>

                <div className="mb-2">
                    <label >Email  </label>
                    <input type="text" name="email" value={values.email} onChange={e=>setValues({...values,email:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Email"/>
                </div>
                <div className="mb-2">
                    <label >Phone  </label>
                    <input type="text" name="phone" value={values.phone} onChange={e=>setValues({...values,phone:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Phone"/>
                </div>
                <div className="mb-2">
                    <label >Website  </label>
                    <input type="text" name="website" value={values.website} onChange={e=>setValues({...values,website:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter website"/>
                </div>
                <div className="mb-2">
                       <input type="file" name="file" onChange={e=>setValues({...values,pictureurl:URL.createObjectURL(e.target.files[0])})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter website"/>
                    </div>
                <button onClick={handleUpdate} className="bg-indigo-600 rounded text-white m-3 p-1">Update</button>
                <Link to="/" className="bg-indigo-600 rounded text-white m-3 p-1">Back</Link>
            </form>
        </div>
    </div>
    )

}export default Update;
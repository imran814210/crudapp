import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create(){
    const navigate=useNavigate();
    const[values,setValues]=useState(
        {
            name:'',
            username:'',
            email:'',
            phone:'',
            website:''
        }
    )
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/users',values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err=>console.log(err));
    }
    return(
        <div className="flex flex-col items-center bg-orange-300 w-full h-screen">
        <h1 className="text-3xl m-10 underline">Add a User</h1>
             <div className="w-[30%] rounded bg-white border shadow p-4">
                <form>
                    <div className="mb-2">
                        <label >Name  </label>
                        <input type="text" name="name" onChange={e=>setValues({...values,name:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Name"/>
                    </div>
                    <div className="mb-2">
                        <label > UserName </label>
                        <input type="text" name="username" onChange={e=>setValues({...values,username:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter user name"/>
                    </div>
                    <div className="mb-2">
                        <label >Email  </label>
                        <input type="text" name="email" onChange={e=>setValues({...values,email:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Email"/>
                    </div>
                    <div className="mb-2">
                        <label >Phone  </label>
                        <input type="text" name="phone" onChange={e=>setValues({...values,phone:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter Phone"/>
                    </div>
                    <div className="mb-2">
                        <label >Website  </label>
                        <input type="text" name="website" onChange={e=>setValues({...values,website:e.target.value})} className="w-full rounded border block text-indigo-600 focus:ring-indigo-600 " placeholder="Enter website"/>
                    </div>
                    <button onClick={handleSubmit} className="bg-indigo-600 rounded text-white m-3 p-1">Submit</button>
                    <Link to="/" className="bg-indigo-600 rounded text-white m-3 p-1">Back</Link>
                </form>
            </div>
        </div>
    )

}export default Create;
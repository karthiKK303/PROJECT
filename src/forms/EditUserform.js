import { useEffect, useState } from "react"
import React from "react";


const EditUserform =(props)=>{
    console.log(props);
    const[user,setUser]= useState(props.currentUser);

    const handleInputChange =(event)=>{
        const {name,value}= event.target
        setUser({...user,[name]:value})
    }
    useEffect(()=>{
        setUser(props.currentUser)
    },[props])
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if (!user.name||!user.username) return;
                // props.setEditing(true)
                props.updateUser(user.id,user);
                
            }
        }>
            <label>Name</label><br/>
            <input type="text" onChange={handleInputChange} name="name" value={user.name}/><br/>
            <label>Username</label><br/>
            <input type="text" onChange={handleInputChange} name="username" value={user.username}/><br/>
            <button>Update user</button>
            <button onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
        </form>
    )
}
export default EditUserform;
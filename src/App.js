import { useState } from "react";
import Adduserform from "./forms/Adduserform";
import UserTable from "./tables/Usertable";
import EditUserform from "./forms/EditUserform";
import './index.css'



function App() {
  const usersData=[
    {id:1,name:"karthikeyan",username:"karthi"},
    {id:2,name:"srigokul",username:"sri"},
    {id:3,name:"nr gokul",username:"nr"}

  ]
  const addUsers =(user)=>{
    user.id = users.length+1;
    setUsers([...users,user])
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id!==id))
  }
  const [users,setUsers]=useState(usersData);
  const[editing,setEditing]=useState(false);

  const initialFormstate={id:'',name:'',username:''};

  const[currentUser,setCurrentUser]=useState(initialFormstate);

  const editRow=(user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  const updateUser=(id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id ===id ? updatedUser:user)))
  }

  return (
    <>
    <h1>CRUD App with hooks</h1>
    <div className="container">
      
      <div className="flex-row">
        <div className="flex-small">
          {editing?(<div>
            <h2>Edit user </h2>
            <EditUserform
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
          </div>):
          (<div>
            <h2>Add user</h2>
          <Adduserform addUsers={addUsers}/>
          </div>)}
          
        </div>
        <div className="flex-large">
         
          </div>
          
          <div className="flex-table">
          <h2>View users</h2>
            <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
            </div>
          
        
      </div>

    </div>
    </>
  );
}

export default App;

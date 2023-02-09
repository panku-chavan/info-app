//import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Todos=()=>{
    const [todos,setTodos]=useState([]);
    const [messege,setMessege]=useState('');
    const [show,setShow]=useState(false);
   
    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)
       },3000)
    },[show])

    useEffect(()=>{
      const url='http://localhost:8080/todos';
      fetch(url).then((res)=>res.json()).then((data)=>setTodos(data)).catch((err)=>console.log(err));

    },[todos])
    //console.log(todos)
    const todoList=()=>{
        return todos.map((ele,i) => {
            return <tr key={i}>
                    <td>{ele.name}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.dob}</td>
                    <td>{ele.mob}</td>
                    <td>{ele.status}</td>
                    <td>
                        
                        <button className="btn btn-sm btn-primary" style={{marginRight:"4px"}}><Link className="nav-link" to='/edit' state={{id:ele._id,name:ele.name,gender:ele.gender,dob:ele.dob,mob:ele.mob,status:ele.status}}>Edit</Link></button>
                        <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(ele._id)}>Delete</button>
                    </td>
            </tr>
        })
    }
    const handleDelete=(id)=>{
        setShow(true)
        axios.delete(`http://localhost:8080/todos/delete/${id}`).then((res)=>{
            console.log(res.data);
            setMessege(res.data);
        }).catch((err)=>console.log(err))
    }
    return(
        <div className="container-lg">
             <h3 style={{textAlign:"center"}}>Information</h3>
            <table className='table table-striped' style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{todoList()}</tbody>
            </table>
            <div>
                {show ? <h4>{messege}</h4>:null}
            </div>
        </div>
    )
}
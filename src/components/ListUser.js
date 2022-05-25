import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function ListUsers(){
    const [users, setusers] =useState([]);
    useEffect(()=>{
        getUsers();
    }, []);
    function getUsers(){
        axios.get('http://localhost/api/users/').then(function(response){
            setusers(response.data);
        });
    }
    const deleteuser = (id) => {
        axios.delete(`http://localhost/api/user/${id}//delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return(
        <div>
            <h1>List Users</h1>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key ={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight:'10px'}} className="btn btn-primary">Edit</Link>
                                <button className='btn btn-danger' onClick={()=>deleteuser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListUsers;
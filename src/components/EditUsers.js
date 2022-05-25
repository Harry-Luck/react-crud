import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EditUsers(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputs, setinput] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);
    function getUsers(){
        axios.get(`http://localhost/api/user/${id}/edit`).then(function(response){
            console.log(response.data);
            setinput(response.data);
        })
    }
    const handleChange =(event)=>{
        const name = event.target.name;
        const value= event.target.value;
        setinput(values=>({...values, [name]: value}));
        console.log(inputs);
    }
    const handlesubmit =(event)=>{
        event.preventDefault();
        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        })
    }
    return(
        <div>
           <h1>EditUsers</h1>
            <form onSubmit={handlesubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                <input value={inputs.id} text='text' name="id" onChange={handleChange} className='form-control' />
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} className='form-control' />
                            </td>
                        </tr>
                        <tr>
                            <td>Eamil</td>
                            <td>
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} className='form-control' />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>
                                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} className='form-control' />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button className="btn btn-primary" type="submit">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default EditUsers;
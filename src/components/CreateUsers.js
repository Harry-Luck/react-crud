import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function CreateUsers(){
    const navigate = useNavigate();
    const [inputs, setinput] = useState([]);
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setinput(values =>({...values,[name]:value}));
    }
    const handlesubmit =(event) =>{
        event.preventDefault();
        axios.post('http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }
    return(
        <div>
            <h1>CreateUsers</h1>
            <form onSubmit={handlesubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                <input text='int' name="id" onChange={handleChange} className='form-control' />
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" onChange={handleChange} className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" name="email" onChange={handleChange} className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className='btn btn-primary' type='submit'>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default CreateUsers;
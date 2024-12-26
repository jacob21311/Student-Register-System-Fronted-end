import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const navigate = useNavigate();

    const{id} = useParams();

    const[student, setStudent] = useState({
        firstName : '',
        lastName : '',
        email : '',
        department : ''  
    })
    const{firstName,lastName,email,department} = student;

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get(`http://localhost:9192/students/student/${id}`);
            setStudent(result.data);
        
    };



    const handleInputChange = (e)=> {
        setStudent({...student,[e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/students/update/${id}`,
            student);
        navigate("/view-students"); 
    }

    const handleCancel = () => {
        navigate("/view-students"); 
    }

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow' >
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>
                        First Name
                    </label>
                    <input className='form-control col-sm-6'
                        type="text"
                        name="firstName"
                        id="firstName"
                        required 
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>
                        Last Name
                    </label>
                    <input className='form-control col-sm-6'
                        type="text"
                        name="lastName"
                        id="lastName"
                        required 
                        value={lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>
                        Email
                    </label>
                    <input className='form-control col-sm-6'
                        type="email"
                        name="email"
                        id="email"
                        required 
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='department'>
                        Department
                    </label>
                    <input className='form-control col-sm-6'
                        type="text"
                        name="department"
                        id="department"
                        required 
                        value={department}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="mt-4">
                    <button type="submit" className="btn btn-success me-2">
                        Save
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditStudent

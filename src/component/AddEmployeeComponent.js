import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Link, useHistory, useParams} from 'react-router-dom';

const AddEmployeeComponent = () => {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[emailId,setEmailId]=useState('');
    const history= useHistory();
    const {id} = useParams();
    
    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();
        const employee = {firstName, lastName, emailId}
        if(id){
                EmployeeService.updateEmployee(id, employee).then((response)=>{
                    history.push('/employees');
                }).catch(error=>{
                    console.log(error);
                })
        }else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
                history.push('/employees')
               }).catch(error=>{
                console.log(error);
               })
            }
        }
      
    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }
  return (
    <div>
        <br /><br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-5 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'> FirstName: </label>
                                <input type='text' placeholder='enter first name' name='firstName' 
                                className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'> LastName: </label>
                                <input type='text' placeholder='enter Last name' name='lastName'
                                className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'> Email-Id: </label>
                                <input type='text' placeholder='enter Email Id' name='EmailId'
                                className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                            </div>

                            <button className='btn btn-success'onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                            <Link to="/employees" className="btn btn-danger">Cancel</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddEmployeeComponent
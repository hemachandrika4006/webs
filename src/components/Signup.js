
import React,{ useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


function Signup() {

  let {
    register,handleSubmit,formState:{errors},
  }=useForm();
  
  
  
  let [error,Seterror]=useState("")
  const navigate=useNavigate();
  
  let adduser=(newuser)=>{
    //console.log(newuser)
    axios.post("http://localhost:5500/user-api/register",newuser)
    .then((response)=>{
      console.log('response is',response) 
    if(response.status===201){
    Seterror("");
  //   navigate("/signin");
  navigate('/login')
    } 
else{
  Seterror(response.data.message)
}
    })
    .catch(err=>{
      console.log('error is',err)
    if(err.response){Seterror(err.message)}  
    else if(err.request){Seterror(err.message)}
    else {Seterror(err.message)}
  })
  }

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const[showsomething,setShowsomething]=useState(true);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowsomething(false);
    setShowRegisterForm(false); // Hide register form when showing login form
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowsomething(false);
    setShowLoginForm(false); // Hide login form when showing register form
  };

   
  
  return (
    <div >
      <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
      <button className="btn btn-primary m-2" onClick={toggleLoginForm}>User</button>
      <button className="btn btn-primary m-2" onClick={toggleRegisterForm}>Employer</button>
      </div>
 </div>
      {showLoginForm && (
             <div className="row">
             <div className='col-11 col-sm-6 mx-auto'>
             <form onSubmit={handleSubmit(adduser)}>
             <div className='mb-3'>
                 <label htmlFor="username">username</label>
                 <input type="text" id="username" className='form-control' {...register("username",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* name is required</p>}
                 </div>
                    
       
                 <div className='mb-3'>
                 <label htmlFor="password">password</label>
                 <input type="password" id="password" className='form-control' {...register("password",{required:true})}/>
                 {errors.password?.type==="required" &&<p className='text-danger'>* password is required</p>}
                 </div>
       
       
                 <div className='mb-3'>
                 <label htmlFor="emailtext">Email</label>
                 <input type="email" id="email" className='form-control' {...register("email",{required:true})}/>
                 {errors.email?.type==="required" &&<p className='text-danger'>* email is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="dob">DOB</label>
                 <input type="date" id="dob" className='form-control' {...register("dob",{required:true})}/>
                 {errors.dob?.type==="required" &&<p className='text-danger'>* dob is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="name">Userimage</label>
                 <input type="text" id="image" className='form-control' {...register("image",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* image URL is required</p>}
                 </div>
              <button type="submit" className='btn btn-danger'>Register</button>
           </form>
             </div>
             </div>
      )}

      {showRegisterForm && (
             <div className="row">
             <div className='col-11 col-sm-6 mx-auto'>
             <form onSubmit={handleSubmit(adduser)}>
             <div className='mb-3'>
                 <label htmlFor="username">username</label>
                 <input type="text" id="username" className='form-control' {...register("username",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* name is required</p>}
                 </div>
                    
       
                 <div className='mb-3'>
                 <label htmlFor="password">password</label>
                 <input type="password" id="password" className='form-control' {...register("password",{required:true})}/>
                 {errors.password?.type==="required" &&<p className='text-danger'>* password is required</p>}
                 </div>
       
       
                 <div className='mb-3'>
                 <label htmlFor="emailtext">Email</label>
                 <input type="email" id="email" className='form-control' {...register("email",{required:true})}/>
                 {errors.email?.type==="required" &&<p className='text-danger'>* email is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="dob">DOB</label>
                 <input type="date" id="dob" className='form-control' {...register("dob",{required:true})}/>
                 {errors.dob?.type==="required" &&<p className='text-danger'>* dob is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="name">Userimage</label>
                 <input type="text" id="image" className='form-control' {...register("image",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* image URL is required</p>}
                 </div>
              <button type="submit" className='btn btn-success'>Register</button>
           </form>
             </div>
             </div>
      )}
      {showsomething && (
             <div className="row">
             <div className='col-11 col-sm-6 mx-auto'>
             <form onSubmit={handleSubmit(adduser)}>
             <div className='mb-3'>
                 <label htmlFor="username">username</label>
                 <input type="text" id="username" className='form-control' {...register("username",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* name is required</p>}
                 </div>
                    
       
                 <div className='mb-3'>
                 <label htmlFor="password">password</label>
                 <input type="password" id="password" className='form-control' {...register("password",{required:true})}/>
                 {errors.password?.type==="required" &&<p className='text-danger'>* password is required</p>}
                 </div>
       
       
                 <div className='mb-3'>
                 <label htmlFor="emailtext">Email</label>
                 <input type="email" id="email" className='form-control' {...register("email",{required:true})}/>
                 {errors.email?.type==="required" &&<p className='text-danger'>* email is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="dob">DOB</label>
                 <input type="date" id="dob" className='form-control' {...register("dob",{required:true})}/>
                 {errors.dob?.type==="required" &&<p className='text-danger'>* dob is required</p>}
                 </div>
       
                 <div className='mb-3'>
                 <label htmlFor="name">Userimage</label>
                 <input type="text" id="image" className='form-control' {...register("image",{required:true})}/>
                 {errors.name?.type==="required" &&<p className='text-danger'>* image URL is required</p>}
                 </div>
              <button type="submit" className='btn btn-danger'>Register</button>
           </form>
             </div>
             </div>
      )}
    </div>
  );

}


export default Signup;
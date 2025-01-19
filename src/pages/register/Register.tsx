import React, { ChangeEvent, useState,  FormEvent } from 'react';
import './register.scss';
import SERVER from '../../utils/server';
// import upload from '../../utils/upload';


const initialState = {
  username: '',
  email: '',
  isSeller: false,
  country: '',
  password: '',
  img: '',
  desc: ''
}

const Register = () => {

  const [user, setUser] = useState(initialState);
  const [file, setFile] = useState<string>('');
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
    const {name, value } = e.target;
    setUser({...user, [name]: value})
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0].name); 
    } else {
      setFile('');
    }
  }



  const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, isSeller: e.target.checked})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const url = await upload(file);

    try {
      const res = await SERVER.post('auth/register', {
        ...user, 
        // img: url.toString()
      })
      // console.log(res.data);
      res.data &&
      window.location.replace('/login')
    } catch (error: any) {
      setError(error.response.data)
    }
  }

  console.log(file)

  return (
    <div className='register'>
            <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="user@email.com"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" 
          onChange={handleChange}
           />
          <label htmlFor="">Profile Picture</label>
          <input type="file" 
          onChange={handleFileChange} 
          />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          {error && <span className='err'>{error}</span>}
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" 
              onChange={handleSeller} 
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols={30}
            rows={7}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}

export default Register;

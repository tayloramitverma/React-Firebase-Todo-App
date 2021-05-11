import React,{useState} from 'react'
import {auth} from '../firebase'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
export default function SignUp() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history =  useHistory()

    const submithandle = async (e) => {
        e.preventDefault()
        try{
            const response = await auth.createUserWithEmailAndPassword(email, password);
            M.toast({html:`Welcome ${response.user.email}`, classes:'green'})
            history.push('/')
        }catch(err){
            M.toast({html:err.message, classes:'red'})
        }
    }

    return (
        <div className="container center" style={{maxWidth:'500px',marginTop:'30px'}}>
            <div className="row">
                <h1>Sign Up</h1>
                <form className="col s12" onSubmit={(e)=>submithandle(e)}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="validate"/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="validate"/>
                        <label htmlFor="email">Password</label>
                        </div>
                    </div>

                    <button className="btn waves-effect waves-light" type="submit">Signin
                    </button>
                </form>
            </div>
        </div>
    )
}

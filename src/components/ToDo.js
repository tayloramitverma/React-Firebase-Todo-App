import React,{useState, useEffect} from 'react'
import {db} from '../firebase'
import {useHistory} from 'react-router-dom'

let unsubscribe = () =>{}
export default function ToDo({user}) {
    const [todo, setTodo] = useState('')
    const [mytodos, setMytodos] = useState([])
    const history = useHistory();
    useEffect(()=>{

        if(user){
            const docRef = db.collection('todos').doc(user.uid)
            unsubscribe = docRef.onSnapshot(docSnap=>{
                if(docSnap.exists){
                    setMytodos(docSnap.data().todos)
                }
            })
        }else{
            history.push('/signin')
        }

        return()=>{
            unsubscribe()
        }

    },[user,history])

    const addTodo = (e) => {
        e.preventDefault()
        db.collection('todos').doc(user.uid).set({
            todos: [...mytodos,todo]
        })
        setTodo('')
    }

    const deleteTodo = (item) => {
        const docRef = db.collection('todos').doc(user.uid)
        docRef.get().then(docSnap=>{
            const updatedDoc = docSnap.data().todos.filter(todo=> todo !== item)
            docRef.update({
                todos:updatedDoc
            })
        })
    }
    return (
        <div className="container" style={{maxWidth:'500px',marginTop:'30px'}}>
            <div className="row center">
                <h1>Todo</h1>
                <form className="col s12" onSubmit={(e)=>addTodo(e)}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className="validate"/>
                        <label htmlFor="text">Enter your todo</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">Add
                    </button>
                </form>
            </div>
                    <ul className="collection">
                        {
                            mytodos.length>0 && mytodos.map((item, index)=>{
                                return (
                                    <li className="collection-item" key={index}>
                                        {item}  
                                        <i className="right material-icons" onClick={()=>deleteTodo(item)}>delete</i>
                                    </li>
                                )
                            }) 

                        }
                    
                    </ul>

        </div>
    )
}
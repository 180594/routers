import { useState } from "react"




const NewMovie =({CreateMovie})=>{
    const [value,setValue]=useState({Title:"",Poster:""})
    console.log(value)
 
    const handelAdd = ()=>{
        CreateMovie({...value})}
    return(
        <div>
            <h1>new movie</h1>
            <input type="text" placeholder="Title" name="Title" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
            <input type="text" placeholder="Poster" name="Poster" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
            <button onClick={()=>handelAdd()}>submit</button>
        </div>
    )
}
export default NewMovie
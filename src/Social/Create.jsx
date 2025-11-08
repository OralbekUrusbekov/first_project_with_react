import { useState } from "react";
import {saveSocial} from '../api/api'
import { useNavigate } from "react-router-dom";
export default function Create(){
    const navigate = useNavigate(); //sdfghnmjglhmbn lggfv;e
    const[name,setName] = useState("")
    const[app,setApp] = useState("")
    const[description,setDescriptiion] = useState("")
    const handleform = async (e) => {
        e.preventDefault();

        const values = {
            name: name,
            app: app,
            logo:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
            description: description,
    }

    
    

        setName("")
        setApp("")
        setDescriptiion("")
        const  datacreate = await saveSocial(values);
        console.log(datacreate.name );
        navigate("/socials",{state : { name: datacreate.name ,title: "Saved social media"}}) //sdfghnmjglhmbn lggfv;e
    }
    return (

        <div style =  {{display: "flex", justifyContent: "center", marginLeft: "500px"}}>
        <form onSubmit={handleform} style =  {{display: "flex", flexDirection: "column", gap: "20px", width: "500px", height: "500px" }}>
            <div><label htmlFor="">Name</label><input type="text"  name = "name" value = {name} onChange = {(e) => (setName(e.target.value))}/></div>
            <div><label htmlFor="">App</label><input type="text" name = "app"value = {app} onChange = {(e) => (setApp(e.target.value))} /></div>
            <div><label htmlFor="">Description</label><input type="text" name = "description" value = {description} onChange = {(e) => (setDescriptiion(e.target.value))} /></div>
            <div><button>Add</button></div>
 
        </form>
        </div>
    )
}
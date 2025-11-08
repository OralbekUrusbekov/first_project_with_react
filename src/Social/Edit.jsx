import { useEffect, useState } from "react";
import {editSocial,onloadSocial} from '../api/api'
import { useNavigate,useParams } from "react-router-dom";
export default function Edit(){
    const navigate = useNavigate(); //sdfghnmjglhmbn lggfv;e
    const[name,setName] = useState("")
    const[app,setApp] = useState("")
    const[description,setDescriptiion] = useState("")
    const params = useParams(); 
    const [object,setObject] = useState({
        name : " ",app : "",description : ""
    })

    

    const handleform = async (e) => {
        e.preventDefault();
        const updated = await editSocial(object);
        navigate('/socials', {state : { name : updated.name + " updated", title: "Updated social"}})
    }


    const handleName = (e) => {
        setObject({...object, name : e})
    }
    const handleApp = (e) => {
        setObject({...object, app : e})
    }
    const handleDescriptiion = (e) => {
        setObject({...object, description : e})
    }



    useEffect(() => {
        const getdata = async () => {
            const responces = await onloadSocial(params.nameId);
            setObject(responces);
        };
        getdata();
    }, [params.nameId]);



return (
    <div style={{ display: "flex", justifyContent: "center", marginLeft: "500px" }}>
        <form onSubmit={handleform} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "500px", height: "500px" }}>
            <div><label htmlFor="name">Name</label><input type="text" name="name" value={object.name} onChange={(e) => handleName(e.target.value)} /></div>
            <div><label htmlFor="app">App</label><input type="text" name="app" value={object.app} onChange={(e) => handleApp(e.target.value)} /></div>
            <div><label htmlFor="description">Description</label><input type="text" name="description" value={object.description} onChange={(e) => handleDescriptiion(e.target.value)} /></div>
            <div><button type="submit">Update</button></div>
        </form>
    </div>
);
}

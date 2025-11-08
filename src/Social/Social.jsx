import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData,useLocation ,useNavigate,useParams} from "react-router-dom";
import { loadSocial,deleteSocial,AllloadSocial  } from "../api/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationContainer,NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css'
export default function Social() {
  const [create, setCreate] = useState(false);
  const [button, setButton] = useState("Add");
  const [infor, setInfor] = useState([]);
  const [data, setData] = useState([]); 
  const [type, setType] = useState([]); 
  
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  
  const url = params.typeId ? `http://localhost:4000/social?typeId=${params.typeId}` : 'http://localhost:4000/social';

  

  useEffect(() => {
    const alldata = async (url) => {
      const [socials, types] = await AllloadSocial(url);
      setData(socials); 
      setType(types); 
      console.log(url);
      console.log(params.typeId);
    }
    alldata(url);
  }, [url]); 
  

  useEffect(() => {
    if(location.state){
      NotificationManager.success(location.state.name, location.state.title, 3000);
    }
  },[]

)   

  const deleteinf = async (id) => {
    const response = deleteSocial(id);
    navigate(0);
    NotificationManager.success("Deleted Successfully", "Deleted", 3000);
  }

  
return (
  <>
    <NotificationContainer/>
    <div>
  <ul style = {{display: "flex" , gap: "10px"}}>
    {type.map((typeItem) => (
      <Link to = {`/socials/type/${typeItem.id}`} key={typeItem.id} ><li style = {{listStyleType: "none", borderRadius: "5px",border: "1px solid black" ,padding: "1px"}}>{typeItem.name}</li></Link>
    ))}
  </ul>
</div>


    <div className="d-flex" style={{ marginLeft: '20px' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Social Media Platforms</h1>
        <Link to="/socials/create" style={{ height: '50px', marginBottom: '20px' }} className="btn btn-primary">Add</Link>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {data.map((element, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '20px', width: '160px', textAlign: 'center', flexWrap : "wrap"}}>
              <Link to={`/socials/${element.id}`} style={{ color: 'rgb(60, 48, 48)', textDecoration: 'none' }}>
                <img src={element.logo} alt={element.name} style={{ width: '50px', height: '50px' }} />
                <h2 >{element.name}</h2>
                <p style = {{ height: "50px"}}><strong>App:</strong> {element.app}</p>
                <p style = {{ height: "260px"}}>{element.description}</p>
              </Link>
              <div style = {{display: "flex",flexDirection: "column" , gap: "5px"}}>
                <Link to={`/socials/edit/${element.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => {deleteinf(element.id)}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  </>
);

}

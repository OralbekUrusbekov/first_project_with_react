import { useLoaderData } from "react-router-dom";

export default function Sociallist() {

    const items = useLoaderData();
    console.log(items)
    return (
        
    
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft: '100px', marginTop:'55px'}}>
                <div  style={{ border: '1px solid #ccc', padding: '20px', width: '200px', textAlign: 'center', height: '435px'}}>
                    <img src={items.logo} alt={items.name} style={{ width: '50px', height: '50px' }} />
                    <h2>{items.name}</h2>
                    <p><strong>App:</strong> {items.app}</p>
                    <p>{items.description}</p>
                </div>
        </div>

                      
    );
}

              
                 
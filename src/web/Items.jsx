import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import './web.css'
import { Link,useParams } from 'react-router-dom';
export default function Items() {
    
    const items = useParams();
if (!items.name) return <div>No data available</div>;
    return (
        <div className="content">
            <div className="icon">
                
                <Link to = '/'><FontAwesomeIcon icon={faXmark} /></Link>
            </div>
            <div className="image">
                <img src="/user.png" alt="User" />
                <p>{items.name +     ' '+items.surname}</p>
            </div>
            <div className="content-inform">
                <p>{items.name} {items.surname} is a {items.age}-year-old student at {items.university} studying {items.subject}. His favorite subject is {items.subject}. {items.name}'s career goal is to {items.goals}.</p>
            </div>
        </div>
    );
}
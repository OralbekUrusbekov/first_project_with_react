    import { useState } from "react";
    import { Link, useParams,Outlet } from 'react-router-dom';
    export default function Inform() {
        const [name, setName] = useState("");
        const [surname, setSurname] = useState("");
        const [age, setAge] = useState(0);
        const [university, setUniversity] = useState("");
        const [profession, setProfession] = useState("");
        const [subject, setSubject] = useState("");
        const [learningStyle, setLearningStyle] = useState("");
        const [goals, setGoals] = useState("");
        const [object, setObject] = useState([]);

        const handlee = (e) => {
            e.preventDefault();

            const valuesArray = {
                name: name,
                surname: surname,
                age: age,
                university: university,
                profession: profession,
                subject: subject,
                goals: goals,
            };
            setObject([...object, valuesArray])
            setName("")
            setSurname("")
            setAge(0)
            setUniversity("")
            setProfession("")
            setSubject("")
            setLearningStyle("")
            setGoals("")
        };

        return (
            <div className="main">
                <form onSubmit={handlee}>
                    <div className="container">
                        <div>
                            <p>Name</p>
                            <input type="text" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <p>Surname</p>
                            <input type="text" name="surname" placeholder="Enter your surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </div>

                        <div>
                            <p>Age</p>
                            <input type="number" name="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div>
                            <p>University</p>
                            <input type="text" name="university" placeholder="Enter your university" value={university} onChange={(e) => setUniversity(e.target.value)} />
                        </div>
                        <div>
                            <p>Profession</p>
                            <input type="text" name="profession" placeholder="Enter your profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                        </div>
                        <div>
                            <p>Favorite Subject</p>
                            <input type="text" name="subject" placeholder="Enter your favorite subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div>
                            <p>Future Goals</p>
                            <input type="text" name="goals" placeholder="Enter your career goals" value={goals} onChange={(e) => setGoals(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>

                <div className="list">
                    <h2>Student Information</h2>

                    <ul>
                        {object.map((item, index) => (
                            <li key={index}>
                                <Link to={'/' + item.name + '/' + item.surname + '/' + item.age + '/' + item.university + '/' + item.profession + '/' + item.subject + '/' + item.goals  } >{item.name} {item.surname}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Outlet />

            </div>
        );
    }

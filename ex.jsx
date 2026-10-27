function Student({ name, age }) { 
    return ( 
        <div> 
            <h2>{name}</h2> 
            <p>Age: {age}</p> 
        </div> 
    ); 
} 
 
function App() { 
    const students = [ 
        { id: 1, name: "Ravi", age: 20 }, 
        { id: 2, name: "Kiran", age: 21 }, 
        { id: 3, name: "Anu", age: 20 } 
    ]; 
 
    return ( 
        <div> 
            <h1>Students</h1> 
 
            {students.map(student => ( 
                <Student 
                    key={student.id} 
                    name={student.name} 
                    age={student.age} 
                /> 
            ))} 
        </div> 
    ); 
}
export default app;
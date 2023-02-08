import { useState } from "react";

const Home = () => {
    const handleClick = () => {
        setName('Lena');
    }
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Mareena");
    return (
        <div className="home">
            <h1>Homepage</h1>
            <p>You clicked {count} times</p>
            <p>{ name }</p>
            <button onClick={() => setCount(count + 1)}>Click count</button>
            <button onClick={ handleClick}>Click me</button>
            <button onClick={() => setName('Jeena')}>Change name</button>
        </div>
     );
}
 
export default Home;
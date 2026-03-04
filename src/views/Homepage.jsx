import { useContext, useState } from "react"
import { Context } from "../context/context"
import useFetch from '../Hooks/useFetch'


export default function Homepage(){
    const [url, setUrl] = useState();
    const result = useFetch(url, url);
    

    const {data, changeData} = useContext(Context);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => setNewMessage(e.target.value);
    const handleClick= () => changeData(newMessage);

    return(
        <>
            <h1 className="homepage">Homepage</h1>
            <h2>{data}</h2>
            <input type="text" placeholder="New message" onChange={handleChange} />
            <button onClick={handleClick}>Click here</button>

            {/* Esercizio HOOKS */}
            <h1>Titles</h1>
            <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
            <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>

            <ul>
                {result && result.map((post)=> <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
        </>
    )
}
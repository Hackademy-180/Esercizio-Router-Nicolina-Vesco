import { useContext, useState } from "react"
import { Context } from "../context/context"
import useFetch from '../Hooks/useFetch'


export default function Homepage() {
    const [url, setUrl] = useState();
    const result = useFetch(url, url);


    const { data, changeData } = useContext(Context);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => setNewMessage(e.target.value);
    const handleClick = () => changeData(newMessage);

    return (
        <>
            <h1 className="homepage p-[100px] font-bold text-3xl text-center">Homepage</h1>
            <h2 className="text-center font-bold">{data}</h2>
            <div className="flex justify-center mt-4 gap-3">
                <input className="border border-gray-600" type="text" placeholder="  New message" onChange={handleChange} />
                <button className="btn" onClick={handleClick}>Click here</button>

            </div>

            {/* Esercizio HOOKS */}
            <h1 className="text-center font-bold">Titles</h1>
            <div className="flex justify-center gap-3 mt-3">
                <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
                <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>

            </div>

            <ul className="text-center">
                {result && result.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
        </>
    )
}
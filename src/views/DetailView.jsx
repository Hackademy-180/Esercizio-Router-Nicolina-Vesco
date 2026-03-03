import { useLoaderData } from "react-router"

export default function DetailView() {
    const [post, comments] = useLoaderData();

    return (
        <>
        <div className="detailPage">

            <h1>Pagina dettaglio</h1>
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
            <h4>Comments:</h4>
            <ul>
                {comments.map((comment)=>{
                    return <li key={comment.id}>{comment.body} - {comment.email}</li>
                })}
            </ul>
            
        </div>
            </>
    )
}
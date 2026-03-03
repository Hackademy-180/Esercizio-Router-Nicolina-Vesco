import { useEffect, useState } from 'react'
import {Link, useRouteLoaderData} from "react-router"

import { useLoaderData } from 'react-router';

export default function Posts() {
   const posts = useLoaderData();

    return (
        <>
            <div className="infoPage">
                <h1>Info page</h1>
                <h2>List: </h2>
                <ul>
                    {posts && posts.map((post)=>{
                        return <li key={post.id}>{post.title} : <Link to={`/posts/detail/${post.id}`}>Detaglio</Link></li>
                    })}
                </ul>
            </div>
        </>
    )
}
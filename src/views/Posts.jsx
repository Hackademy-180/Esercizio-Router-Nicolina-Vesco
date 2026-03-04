import { useEffect, useState } from 'react'
import { Link, useRouteLoaderData } from "react-router"
import { useContext } from 'react';
import { Context } from '../context/context';

import { useLoaderData } from 'react-router';

export default function Posts() {
    const { data } = useContext(Context);
    const posts = useLoaderData();

    return (
        <>
            <div className="infoPage">
                <h1>Info page</h1>
                <h2>{data}</h2>
                <h3>List: </h3>
                <ul>
                    {posts && posts.map((post) => {
                        return <li key={post.id}>{post.title} : <Link to={`/posts/detail/${post.id}`}>Detaglio</Link></li>
                    })}
                </ul>
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                 setPosts(response.data)
            })
            .catch(error => {
                console.log('Errors', error)
            })
    }, []) // if we don't put [] then it will continue calling the fetch calls.
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}> {post.title}</li>
            ))}
        </ul>
    )
}

export default DataFetching
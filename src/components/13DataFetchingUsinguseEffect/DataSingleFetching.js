import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataSingleFetching() {

    const [id, setId] = useState(1)
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log('Errors', error)
            })
    }, [id]) // if we don't put [] then it will continue calling the fetch calls.
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    )
}

export default DataSingleFetching
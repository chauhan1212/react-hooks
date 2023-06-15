import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingByButton() {

    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [postButtonId, setPostButtonId] = useState(1)

    const clickHandler = () =>{
        setPostButtonId(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postButtonId}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log('Errors', error)
            })
    }, [postButtonId]) // if we don't put [] then it will continue calling the fetch calls.
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={clickHandler}>Fetch Button</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingByButton
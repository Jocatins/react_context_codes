import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching1() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res =>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButton])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching1

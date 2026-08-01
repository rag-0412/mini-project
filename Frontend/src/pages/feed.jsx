import React from "react"
import { useState } from "react"

export const Feed = () => {
    
    const [posts, setPosts] = useState([
       {
        _id:"1",
        image:"https://images.unsplash.com/photo-1771136681032-50ba1d52810b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
        caption: "pretty image"
       } 
    ])

return (

    <section className="feed-section" >
       
        {
            posts.length > 0 ?(
             posts.map((post) => (
                <div key={post._id} className="post-card">
                    <img src={post.image} alt="post-img"></img>
                    <p>{post.caption}</p>
                </div>
            ))   
            ) : (

                <h1>no post available</h1>
            )
        }
        
    </section>
    )
}

export default Feed;
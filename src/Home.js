import { useEffect, useState, useEffect } from "react";
import BlogList from "./BlogList";

// import (useState)

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                // setIsPending(false);
            })
    }, []);

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}

            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            
        </div>
     );
}
 
export default Home;
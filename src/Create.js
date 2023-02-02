import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('e');
    const [body, setBody] = useState('e');
    const [author, setAuthor] = useState('yoshi');
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        const blog = { title, body, author };
        // console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            navigate('/');
        })
    }

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input typeof="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
            <label>Blog Author:</label>
            <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>
        </form>
        </div>
  );
}
 
export default Create;
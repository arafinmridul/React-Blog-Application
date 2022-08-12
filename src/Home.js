import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

//sfc
const Home = () => {
    
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    

    return (
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList Blog={blogs} Title="All Blogs" />}
        </div>
    );
    //Here, Blog={blogs} is a prop
}
 
export default Home;
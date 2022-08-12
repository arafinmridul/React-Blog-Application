//sfc
    const BlogList = ({ Blog, Title }) => {
    return ( 
        <div className="blog-list">
            <h2>{Title}</h2>
            {Blog.map((blg)=> (
                <div className="blog-preview" key={blg.id}>
                    <h2>{blg.title}</h2>
                    <p>Written by {blg.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
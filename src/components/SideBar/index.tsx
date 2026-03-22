import usePost from '../../hooks/usePost';

const SideBar = () => {
    const {posts, genres} = usePost()

    return (
        <div className="max-w-2xl mx-auto p-6">
        {
            [...genres].map((genre, key) => (
                <div key={key}>
                    <p>{genre}</p>
                    {
                        posts.filter(p => p.genre === genre).map((post, key) => (
                            <p key={key}>{post.title}</p>
                        ))
                    }
                </div>
            ))
        }
        </div>
    );
}

export default SideBar
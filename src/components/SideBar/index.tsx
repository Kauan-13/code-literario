import usePost from '../../hooks/usePost';
import SideBarFolder from './SideBarFolder';
import style from "./style.module.css";

const SideBar = () => {
    const {posts, genres} = usePost()

    return (
        <nav className={style.navBar}>
            {
                [...genres].map((genre, key) => (
                    <SideBarFolder key={key} genre={genre} posts={posts.filter(p => p.genre === genre)}/>
                ))
            }
        </nav>
    );
}

export default SideBar
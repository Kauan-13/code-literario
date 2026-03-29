import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FileItem from "../FileItem";
import style from "./style.module.css"
import fonts from "../../css/fonts.module.css";

const FolderPage = () => {
    const { genre } = useParams<{ genre: string }>();
    const { posts } = usePost();

    const postByGenre = posts.filter(p => p.genre == genre);

    return (
        <section className={`${style.folderPage} ${fonts.jetbrainsMono}`}>
            <h1>{genre}</h1>
            <ul>
                {
                    postByGenre.map((post, key) => (
                        <FileItem key={key} link={"/file/" + post.title} title={post.title} />
                    ))
                }
            </ul>
       </section>
    )
}

export default FolderPage
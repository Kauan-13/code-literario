import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FileItem from "../FileItem";
import MainSection from "../MainSection";
import fonts from "../../css/fonts.module.css";

const FolderPage = () => {
    const { genre } = useParams<{ genre: string }>();
    const { posts } = usePost();

    const postByGenre = posts.filter(p => p.genre == genre);

    return (
        <MainSection className={fonts.jetbrainsMono}>
            <h1>{genre}</h1>
            <ul>
                {
                    postByGenre.map((post, key) => (
                        <FileItem key={key} title={post.title} id={post.id}/>
                    ))
                }
            </ul>
        </MainSection>
    )
}

export default FolderPage
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import style from "./style.module.css";
import fonts from "../../css/fonts.module.css";
import type { Post } from "../../types/Post";
import NotFound from "../NotFound";

const FilePage = () => {
    const { title } = useParams<{ title: string }>();
    const {posts, readme} = usePost();
    let post: Post | undefined;

    if (title) {
        post = posts.find(p => p.title == title);
    } else {
        post = readme;
    }

    if (post === undefined) {
        return <NotFound/>
    }
    
    return (
        <section className={`${style.filePage} ${fonts.jetbrainsMono} ${post?.genre == "poema" && style.poema}`}>
            <ReactMarkdown>
                {post?.content}
            </ReactMarkdown>
        </section>
    )
}

export default FilePage
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import style from "./style.module.css";
import fonts from "../../css/fonts.module.css";

const FilePage = () => {
    const { title } = useParams<{ title: string }>();
    const {posts} = usePost();

    const postById = posts.find(p => p.title == title)

    return (
        <section className={`${style.filePage} ${fonts.jetbrainsMono}`}>
            <ReactMarkdown>
                {postById?.content}
            </ReactMarkdown>
        </section>
    )
}

export default FilePage
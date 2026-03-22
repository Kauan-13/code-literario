import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import MainSection from "../MainSection";
import style from "./style.module.css";
import fonts from "../../css/fonts.module.css";

const FilePage = () => {
    const { id } = useParams<{ id: string }>();
    const {posts} = usePost();

    const postById = posts.find(p => p.id.toString() == id)

    return (
        <MainSection className={`${style.filePage} ${fonts.jetbrainsMono}`}>
            <ReactMarkdown>
                {postById?.content}
            </ReactMarkdown>
        </MainSection>
    )
}

export default FilePage
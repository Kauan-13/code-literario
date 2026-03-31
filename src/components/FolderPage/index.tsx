import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FileItem from "../FileItem";
import style from "./style.module.css"
import fonts from "../../css/fonts.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import NotFound from "../NotFound";

const FolderPage = () => {
    const { genre } = useParams<{ genre: string }>();
    const { posts } = usePost();
    const {isMobile} = useIsMobile();
    const navigate = useNavigate();

    const postByGenre = posts.filter(p => p.genre == genre);

    if (postByGenre.length === 0) {
        return <NotFound/>
    }

    return (
        <section className={`${style.folderPage} ${fonts.jetbrainsMono}`}>
            <h1>{genre}</h1>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        {
                            !isMobile ?
                            <>
                                <th>Criação</th>
                                <th>Modificação</th>
                            </>
                            :
                            <th>Datas</th>
                        }
                    </tr>
                </thead>
                <tbody>       
                {
                    postByGenre.map((post, key) => (
                        <tr key={key} onClick={() => {
                            navigate("/file/" + post.title)
                        }}>
                            <td className={style.name}>
                                <FileItem link={"/file/" + post.title} title={post.title} />
                            </td>
                            {
                                !isMobile ?
                                <>
                                    <td className={style.created}>
                                        {post.created.toLocaleDateString()}
                                    </td>
                                    <td className={style.modified}>
                                        {post.modified.toLocaleDateString()}
                                    </td>
                                </>
                                :
                                <td>
                                    <p>Criação: {post.created.toLocaleDateString()}</p>
                                    <p>Modificação: {post.modified.toLocaleDateString()}</p>
                                </td>
                            }
                        </tr>
                    ))
                }    
                </tbody>    
            </table>
       </section>
    )
}

export default FolderPage
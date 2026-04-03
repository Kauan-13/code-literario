import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FileItem from "../FileItem";
import style from "./style.module.css"
import useIsMobile from "../../hooks/useIsMobile";
import NotFound from "../NotFound";
import { groupBy } from "../../utils/utils";
import FolderItem from "../FolderItem";

interface Props {
    isDraft?: boolean
}

const FolderPage = ({isDraft = false}: Props) => {
    const { genre } = useParams<{ genre: string }>();
    const { posts } = usePost();
    const {isMobile} = useIsMobile();
    const navigate = useNavigate();

    const postByGenre = posts.filter(p => p.genre == genre);

    if (postByGenre.length === 0) {
        return <NotFound/>
    }

    const postsByCompleted = groupBy(postByGenre, "completed")

    return (
        <section className={`${style.folderPage}`}>
            <h1>{`${isDraft ? "rascunhos" : ""} ${genre}`}</h1>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.thName}>Nome</th>
                        {
                            !isMobile ?
                            <>
                                <th className={style.thCreated}>Criação</th>
                                <th className={style.thModified}>Modificação</th>
                            </>
                            :
                            <th className={style.thDates}>Datas</th>
                        }
                    </tr>
                </thead>
                <tbody>          
                {
                    isDraft ?

                    postsByCompleted.false.map((post, key) => (
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

                    :
                    
                    postsByCompleted.true?.map((post, key) => (
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
                {
                    postsByCompleted.false && !isDraft &&
                    <tr onClick={() => {
                        navigate("/folder/" + genre + "/_draft")
                    }}>
                        <td>
                            <FolderItem title={"_rascunhos"} link={"/folder/" + genre + "/_draft"}/>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                }
                </tbody>    
            </table>
       </section>
    )
}

export default FolderPage
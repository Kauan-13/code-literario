import { FaFile } from "react-icons/fa6"
import style from "./style.module.css"
import { Link } from "react-router-dom"

interface Props {
    className?: string,
    id: number,
    title: string
}

const FileItem = ({id, title, className}: Props) => {
    return (
        <li title={title}>
            <Link to={"/file/" + id} className={`${style.items} ${className}`}>
                <FaFile className={style.icon}/>
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default FileItem
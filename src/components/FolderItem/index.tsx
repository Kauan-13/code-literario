import { Link } from "react-router-dom"
import style from "./style.module.css"
import { FaFolder } from "react-icons/fa6"

interface Props {
    className?: string,
    title: string,
    link: string,
}

const FolderItem = ({ title, link, className }: Props) => {
    return (
        <li title={title}>
            <Link to={link} className={`${style.items} ${className}`}>
                <FaFolder className={style.icon}/>
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default FolderItem
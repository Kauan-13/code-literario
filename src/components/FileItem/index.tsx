import { FaFile } from "react-icons/fa6"
import style from "./style.module.css"
import { Link } from "react-router-dom"

interface Props {
    className?: string,
    title: string,
    isMobile?: boolean,
    onClickCloseBar?: () => void
}

const FileItem = ({ title, className, isMobile, onClickCloseBar}: Props) => {
    return (
        <li title={title} onClick={() => {
            isMobile && onClickCloseBar ? onClickCloseBar() : null
        }}>
            <Link to={"/file/" + title} className={`${style.items} ${className}`}>
                <FaFile className={style.icon}/>
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default FileItem
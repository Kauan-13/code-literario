import { useState } from "react"
import type { Post } from "../../../types/Post"
import style from "./style.module.css"
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import FileItem from "../../FileItem";

interface Props {
    genre: string,
    posts: Post[]
}

const SideBarFolder = ({genre, posts}: Props) => {
    const [contentVisibility, setContentVisibility] = useState(false)
    const navigate = useNavigate()

    return (
        <ul>
            <div className={`${style.items} ${style.folderItem}`} 
                onClick={() => {
                    setContentVisibility(true)
                    navigate("/folder/" + genre)
                }}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        onClick={(e) => {
                            e.stopPropagation();
                            setContentVisibility(v => !v)
                        }}
                        key={contentVisibility ? "open" : "close"}
                        initial={{rotate: 90 }}
                        animate={{rotate: 0 }}
                        exit={{rotate: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {contentVisibility ? <IoIosArrowDown/> : <IoIosArrowForward/>}
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={contentVisibility ? "open" : "close"}
                        initial={{ y: 2, opacity: 1, rotate: 0 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 2, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        {contentVisibility ? <FaFolderOpen/> : <FaFolder/>}
                    </motion.div>
                </AnimatePresence>
                <p>{genre}</p>
            </div>
            {
                contentVisibility ?
                    <ul className={style.ulFiles}>
                        {
                            posts.map((post, key) => (
                                <FileItem key={key} title={post.title} id={post.id} className={style.fileItem}/>
                            ))
                        }
                    </ul>
                : null
            }
        </ul>  
    )
}

export default SideBarFolder
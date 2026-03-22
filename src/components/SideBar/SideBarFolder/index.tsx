import { useState } from "react"
import type { Post } from "../../../types/Post"
import style from "./style.module.css"
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    genre: string,
    posts: Post[]
}

const SideBarFolder = ({genre, posts}: Props) => {
    const [contentVisibility, setContentVisibility] = useState(false)


    return (
        <ul>
            <li className={style.liFolder}>
                <div className={`${style.items} ${style.folderItem}`} onClick={() => setContentVisibility(v => !v)}>
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
                                    <li key={key} className={style.liFile} title={post.title}>
                                        <div className={`${style.items} ${style.fileItem}`}>
                                            <FaFile />
                                            <p>{post.title}</p>
                                        </div>
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    : null
                }
                
            </li>
        </ul>  
    )
}

export default SideBarFolder
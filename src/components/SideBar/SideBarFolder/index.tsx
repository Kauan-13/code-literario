import { useState } from "react"
import type { Post } from "../../../types/Post"
import style from "./style.module.css"
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import FileItem from "../../FileItem";
import { groupBy } from "../../../utils/utils";

interface Props {
    genre: string,
    posts: Post[],
    isMobile: boolean,
    isDraft?: boolean,
    onClickCloseBar: () => void
}

const SideBarFolder = ({genre, posts, isMobile, isDraft = false,  onClickCloseBar}: Props) => {
    const [contentVisibility, setContentVisibility] = useState(false);
    const navigate = useNavigate();

    const postsByCompleted = groupBy(posts, "completed");

    return (
        <li>
            <div className={`${style.items} ${style.folderItem} ${isDraft && style.draft}`} 
                onClick={() => {
                    setContentVisibility(true);
                    if (isDraft) 
                        navigate("/folder/" + genre + "/_draft") 
                    else
                        navigate("/folder/" + genre);
                    
                    if (isMobile) onClickCloseBar();
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
                <p>{isDraft ? "_rascunhos" : genre}</p>
            </div>
            {
                contentVisibility &&
                <ul className={style.ulFiles}>
                    {
                        postsByCompleted.true?.map((post, key) => (
                            <FileItem key={key} title={post.title} link={"/file/" + post.title} className={style.fileItem} isMobile={isMobile} onClickCloseBar={onClickCloseBar}/>
                        ))   
                    }
                    {
                        isDraft ? 
                        postsByCompleted.false?.map((post, key) => (
                            <FileItem key={key} title={post.title} link={"/file/" + post.title} className={`${style.fileItem} ${style.fileItemDraft}`} isMobile={isMobile} onClickCloseBar={onClickCloseBar}/>
                        ))

                        :

                        postsByCompleted.false &&
                        <SideBarFolder genre={genre} posts={postsByCompleted.false} isMobile={isMobile} onClickCloseBar={onClickCloseBar} isDraft/>
                    }
                </ul>
            }
        </li>  
    )
}

export default SideBarFolder
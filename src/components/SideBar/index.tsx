import usePost from '../../hooks/usePost';
import SideBarFolder from './SideBarFolder';
import style from "./style.module.css";
import { BsLayoutSidebar } from "react-icons/bs";
import { AnimatePresence, motion, type Variants } from 'framer-motion';

interface Props {
    isOpen: boolean,
    isMobile: boolean,
    onClickOpen: () => void,
}

const SideBar = ({isOpen, isMobile, onClickOpen}: Props) => {
    const {posts, genres} = usePost();

    const sidebarVariants: Variants = {
        open: { 
            width: isMobile ? "100vw" : 250,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        closed: { 
            width: isMobile ? "0vw" : 64,
            transition: { type: "spring", stiffness: 200, damping: 30 }
        }
    };

    return (
        <motion.nav 
            className={style.navBar}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
        >
            <div className={style.topNavBar}>
                 <BsLayoutSidebar onClick={onClickOpen}/>
            </div>
            <AnimatePresence mode="wait" initial={false}>
                {isOpen && (
                    <motion.div
                        className={style.folders}
                        key={isOpen ? "open" : "close"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {[...genres].map((genre, index) => (
                            <SideBarFolder 
                                key={index} 
                                genre={genre} 
                                posts={posts.filter(p => p.genre === genre)}
                                isMobile = {isMobile}
                                onClickCloseBar={onClickOpen}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default SideBar
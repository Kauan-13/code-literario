import { useLocation } from "react-router-dom"
import SideBar from "../SideBar"
import style from "./style.module.css"
import fonts from "../../css/fonts.module.css"
import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { BsLayoutSidebar } from "react-icons/bs"
import { FaCalendar, FaGithub } from "react-icons/fa6";
import usePost from "../../hooks/usePost"

interface Props {
    className?: string
    children?: React.ReactNode
}

const MainSection = ({children, className}: Props) => {

    const {isMobile} = useIsMobile();
    const [isOpen, setIsOpen] = useState(!isMobile);
    const {posts} = usePost();
    const location = useLocation();

    const post = posts.find(p => p.title == location.pathname.split("/").at(-1));

    return (
        <div className={style.appWrapper}>
            <header className={`${style.header} ${fonts.jetbrainsMono}`}>
                    <img src="./logo1.png" alt="logo" />
                    <h1>Code Literário</h1>
            </header>
            <main className={style.main}>
                <SideBar isOpen={isOpen} isMobile={isMobile} onClickOpen={() => setIsOpen(o => !o)}/>
                <section className={`${style.mainSection} ${className}`}>
                    <div className={`${style.topMain} ${fonts.jetbrainsMono}`}> 
                        {isMobile && !isOpen &&
                            <BsLayoutSidebar className={style.icon} onClick={() => setIsOpen(o => !o)}/>
                        }
                        <p>{location.pathname}</p>
                    </div>
                    {children}
                </section>
            </main>
            <footer className={`${style.footer} ${fonts.jetbrainsMono}`}>
                {post &&
                    <div className={style.date}>
                        <FaCalendar/>
                        <p>{new Date(post.created).toLocaleDateString()}</p>
                    </div>
                }   
                <a href="https://github.com/Kauan-13/code-literario" target="_blank">
                    <FaGithub />
                    Kauan
                </a>
            </footer>
        </div>
    )
}

export default MainSection
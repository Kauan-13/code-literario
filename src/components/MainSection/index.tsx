import { Link, useLocation } from "react-router-dom"
import SideBar from "../SideBar"
import style from "./style.module.css"
import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { BsLayoutSidebar } from "react-icons/bs"
import { FaCalendar, FaGithub } from "react-icons/fa6";
import usePost from "../../hooks/usePost"
import fonts from "../../css/fonts.module.css"

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
        <div className={`${style.appWrapper} ${fonts.jetbrainsMono}`}>
            <header className={`${style.header}`}>
                <div className={style.logoTitle}>
                    <img src="./logo1.png" alt="logo" />
                    <h1>Code Literário</h1>
                </div>
                <Link to="/config" onClick={() => setIsOpen(false)}>
                    <p>Configurações</p>
                </Link>
            </header>
            <main className={style.main}>
                <SideBar isOpen={isOpen} isMobile={isMobile} onClickOpen={() => setIsOpen(o => !o)}/>
                <section className={`${style.mainSection} ${className}`}>
                    <div className={`${style.topMain}`}> 
                        {isMobile && !isOpen &&
                            <BsLayoutSidebar className={style.icon} onClick={() => setIsOpen(o => !o)}/>
                        }
                        <p>{location.pathname} {post?.completed == false ? <i>rascunho</i> : ""}</p>
                    </div>
                    {children}
                </section>
            </main>
            <footer className={`${style.footer}`}>
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
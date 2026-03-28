import { useLocation } from "react-router-dom"
import SideBar from "../SideBar"
import style from "./style.module.css"
import fonts from "../../css/fonts.module.css"
import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { BsLayoutSidebar } from "react-icons/bs"

interface Props {
    className?: string
    children?: React.ReactNode
}

const MainSection = ({children, className}: Props) => {

    const {isMobile} = useIsMobile();
    const [isOpen, setIsOpen] = useState(!isMobile);
    const location = useLocation();

    return (
        <main className={style.main}>
            <SideBar isOpen={isOpen} isMobile={isMobile} onClickOpen={() => setIsOpen(o => !o)}/>
            <section className={`${style.mainSection} ${className}`}>
                <div className={`${style.topMain} ${fonts.jetbrainsMono}`}> 
                    {isMobile && !isOpen ?
                        <BsLayoutSidebar className={style.icon} onClick={() => setIsOpen(o => !o)}/> : null
                    }
                    <p>{location.pathname}</p>
                </div>
                {children}
            </section>
        </main>
    )
}

export default MainSection
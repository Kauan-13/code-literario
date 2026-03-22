import style from "./style.module.css"

interface Props {
    className?: string
    children?: React.ReactNode
}

const MainSection = ({children, className}: Props) => {
    return (
        <section className={`${style.mainSection} ${className}`}>
            {children}
        </section>
    )
}

export default MainSection
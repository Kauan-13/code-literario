import style from "./style.module.css"

const NotFound = () => {
    return (
        <div className={`${style.notFound}`}>
            <h2>404</h2>
            <p>Ops... Parece que a página que você procura não existe</p>
            <img src="./logo1.png" alt="logo"/>
        </div>
    )
};

export default NotFound;
import useTheme from "../../hooks/useThemes";
import style from "./style.module.css";

const ConfigPage = () => {

    const {theme, setTheme} = useTheme();

    return (
        <div className={style.configs}>
            <h2>Temas</h2>
            <div className={style.themeButtons}>
                <button className={`${style.button} ${style.system}`} onClick={() => setTheme("system")}>
                    <div className={style.titleTheme}>
                        <input type="checkbox" name="themeCheckBox" id="themeCheckBox" value={"system"} checked={theme == "system"} onChange={(event) => setTheme(event.target.value)}/>
                        <p>Cor do sistema</p>
                    </div>
                    <div className={style.example}>
                        <div className={style.sideBar}></div>
                        <div className={style.header}></div>
                    </div>
                </button>
                <button className={`${style.button} ${style.light}`} onClick={() => setTheme("light")}>
                    <div className={style.titleTheme}>
                        <input type="checkbox" name="themeCheckBox" id="themeCheckBox" value={"light"} checked={theme == "light"} onChange={(event) => setTheme(event.target.value)}/>
                        <p>Light</p>
                    </div>
                    <div className={style.example}>
                        <div className={style.sideBar}></div>
                        <div className={style.header}></div>
                    </div>
                </button>
                <button className={`${style.button} ${style.dark}`} onClick={() => setTheme("dark")}>
                    <div className={style.titleTheme}>
                        <input type="checkbox" name="themeCheckBox" id="themeCheckBox" value={"dark"} checked={theme == "dark"} onChange={(event) => setTheme(event.target.value)}/>
                        <p>Dark</p>
                    </div>
                    <div className={style.example}>
                        <div className={style.sideBar}></div>
                        <div className={style.header}></div>
                    </div>
                </button>
                <button className={`${style.button} ${style.bege}`} onClick={() => setTheme("bege")}>
                    <div className={style.titleTheme}>
                        <input type="checkbox" name="themeCheckBox" id="themeCheckBox" value={"bege"} checked={theme == "bege"} onChange={(event) => setTheme(event.target.value)}/>
                        <p>Bege</p>
                    </div>
                    <div className={style.example}>
                        <div className={style.sideBar}></div>
                        <div className={style.header}></div>
                    </div>
                </button>
                <button className={`${style.button} ${style.green}`} onClick={() => setTheme("green")}>
                    <div className={style.titleTheme}>
                        <input type="checkbox" name="themeCheckBox" id="themeCheckBox" value={"green"} checked={theme == "green"} onChange={(event) => setTheme(event.target.value)}/>
                        <p>Green</p>
                    </div>
                    <div className={style.example}>
                        <div className={style.sideBar}></div>
                        <div className={style.header}></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ConfigPage;
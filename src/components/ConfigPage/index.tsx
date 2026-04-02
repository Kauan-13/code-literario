import { useTheme } from "../../contexts/ThemeContext";

const ConfigPage = () => {

    const {setTheme} = useTheme();

    return (
        <>
            <h1>Configurações</h1>
            <div>
                <button onClick={() => setTheme("dark")}>🌙 Dark</button>
                <button onClick={() => setTheme("light")}>☀️ Light</button>
                <button onClick={() => setTheme("bege")}>📜 Bege</button>
                <button onClick={() => setTheme("green")}>📜 green</button>
            </div>
        </>
    )
}

export default ConfigPage;
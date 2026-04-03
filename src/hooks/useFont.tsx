import { useContext } from "react";
import { FontContext } from "../contexts/FontContext";

const useFont = () => {
    const { font, setFont } = useContext(FontContext);

    return { font, setFont }
};

export default useFont;
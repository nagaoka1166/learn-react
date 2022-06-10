import {ColoredMessage} from "./components/ColoredMessage";
import { useState } from "react"


export const App = () => {
    console.log("レンダリング");
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    }
    return(
    <div>
        {console.log("Test")}
    <h1>こんにちは</h1>
    <ColoredMessage color="blue" message="お元気ですか？" />
    <ColoredMessage color="PINK" message="ゲンキデス！s" />
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
    </div>
    );
};
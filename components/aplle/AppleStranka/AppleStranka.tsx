

import {Produkty} from "../ProductList/Produkty";
import {useState} from "react";
export const AppleStranka = () => {
    const [showComponent, setShowComponent] = useState(false);


    function handleClick() {
        setShowComponent(!showComponent);
    }


    return (
        <main>

            <h1>
                Moje Produkty
            </h1>


            <button onClick={handleClick}> Zde</button>
            { showComponent ? <Produkty data={[]}/>
                : null}
        </main>
    )
}


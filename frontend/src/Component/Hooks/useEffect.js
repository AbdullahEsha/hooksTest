import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
    const intialData = 0;
    const [myNum, setMyNum] = useState(intialData);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    });

    return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() =>myNum <20 ? setMyNum(myNum +1): setMyNum(20)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
    );
};

export default UseEffect;
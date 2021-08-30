import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
    const initialdata = 0;
    const [myNum, setMyNum] = useState(initialdata);
    console.log(myNum);

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
        <div class="button2" onClick={() => myNum >0 ? setMyNum(myNum -1): setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
    );
};

export default UseEffect;
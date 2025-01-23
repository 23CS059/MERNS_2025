import { useState, useMemo } from "react";

var slowFunction=(num)=>{
    for(var slow=0;slow<1000;slow++){}
        return num*2
    
}
const UseMemo = () =>{
    var [num,setNum] = useState(0);
    var [dark,setdark] = useState(false);
    var styling = {
        backgroundColor: dark ? "black" : "white", 
        color: dark ? "white" : "black"
    }
    var doubleingUpANumber = useMemo(()=>{
        return slowFunction(num)
    },[num])
    return(
        <div style={styling}>
            <h2>This page is ment for useMemo Hook.</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setdark(curtheme => !curtheme)}>toggle theme</button>
            <h4>The number is {doubleingUpANumber}</h4>
        </div>
    )
}
export default UseMemo;
import { useState } from "react"
import "./Header.css"

const Header = () => {
    const [selected,setSelected]=useState(true);
    const courses= [{id:1,title:"Javascript"},{id:2,title:"React"},{id:3,title:"Next"},{id:4,title:"Javascript2"},{id:5,title:"Javascript3"}]
    const divCss={color:"blue",border:"10px solid gold",backgroundColor:"black"};
    const divCss2={color:"black",border:"6px green dashed"};
  return (
    // <div className={selected ? "container" : ""}>
    // <div style={{backgroundColor:selected ? "green" : "red"}}>
    // <div className={`container ${selected && "select"}`}>
    // //inline css
    // <div style={{color:"blue",border:"10px solid gold",backgroundColor:"black"}}>
    // <div style={divCss}>
    <div style={selected ?  divCss : divCss2}>
      <ul className="list">
        {
            courses.map((i)=><li key={i.id}>{i.title}</li>)
        }
      </ul>
      <button onClick={()=>setSelected(s=>!s)}>Change color</button>
    </div>
  )
}

export default Header

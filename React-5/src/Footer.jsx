import { useState } from 'react';
import styled from 'styled-components'
// const Div = styled.div`
// color:blue;
// background-color:red;
// // border:13px solid gold;
// // &:hover{
// // color:red;
// @media (max-width:1200px){
// background-color:aqua;
// }
// }
// `;
const Div = styled.div`
color:${(props)=>(props.selected ? "blue" : "gold")};
background-color:red;
`;
const Footer = () => {
    const courses= [{id:1,title:"Javascript"},{id:2,title:"React"},{id:3,title:"Next"},{id:4,title:"Javascript2"},{id:5,title:"Javascript3"}]
     const [selected,setSelected]=useState(true);
  return (
    <Div selected={selected}>
      <ul className="list">
        {
            courses.map((i)=><li key={i.id}>{i.title}</li>)
        }
      </ul>
      <button onClick={()=>setSelected(s=>!s)}>Change color</button>
    </Div>
  )
}

export default Footer

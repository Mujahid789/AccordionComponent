import { useState } from "react"


function AccordionItem({title, text, num}) {
   const [isOpen, setisOpen]=useState(false)
   function hnadleTogle(){
    setisOpen(!isOpen)
   }
  return (
    <div className={`item ${isOpen? 'open':''}`} onClick={hnadleTogle}>
        <p className='number'>{num<9?`0${num+1}`:`${num+1}`}</p>
        <p className='title'>{title}</p>
        <p className='icon'>{isOpen?'-':'+'}</p>
       { isOpen && <div className='content-box'>
        {text}
        </div>}
    </div>
  )
}

export default AccordionItem
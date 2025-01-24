import { useState } from "react"


function AccordionItem({title, text, num, setisOpen, curOpen}) {
    const  isOpen = num===curOpen
   function hnadleTogle(){
    setisOpen(isOpen?null:num)
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
import { useState } from "react"
import AccordionItem from './AccordionItem' 

function Accordion({data}) {
    const [isOpen, setisOpen]=useState(null)
  return (
    <div className='accordion'>
        {data.map((item, i) => ( <AccordionItem num={i} title={item.title} text={item.text} curOpen={isOpen} setisOpen={setisOpen}/>))}
       
    </div>
  )
}

export default Accordion
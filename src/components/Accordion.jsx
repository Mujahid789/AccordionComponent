
import AccordionItem from './AccordionItem' 

function Accordion({data}) {
  return (
    <div className='accordion'>
        {data.map((item, i) => ( <AccordionItem num={i} title={item.title} text={item.text}/>))}
       
    </div>
  )
}

export default Accordion
import React,{useState} from 'react';


const Accordion=({items})=>{


    // these are array destructuring , the first one is the initial value of the state and second is the function to override the value
    const [activeIndex,setActiveIndex]=useState(null);


    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }

    

    const renderedItems=items.map((item,index)=>{

        const active=(index===activeIndex)?'active':'';
        
        

        return(
            <React.Fragment key={item.title}>
                    <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                    
                
            </React.Fragment>
        )
    })
    return(
            <div className="ui styled accordion">
                {renderedItems}
            </div>   
    )
}



export default Accordion;
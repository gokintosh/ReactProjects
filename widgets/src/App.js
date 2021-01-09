import React from 'react';


import Accordion from './components/Accordion'
import Search from './components/Search'


const items=[
    {
        title:'What is react?',
        content:'React is a javascript frontend framework'
    },
    {
        title:'Why should we use react?',
        content:'React can be used for creating modern web apps'
    },
    {
        title:'Why is react famous',
        content:'React is easy to use'
    }
]

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple
export default()=>{
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search/>
        </div>
    )
    
}
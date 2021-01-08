import React from 'react';




export default class SearchBar extends React.Component{

  

state={term:''}


onFormSubmit=(event)=>{
    event.preventDefault()
    // sending the value of term to the app component through props
    this.props.onSubmit(this.state.term)
}
   


    render(){
        return (
               <div className="ui segment">
                   {/* when called onSubmit on the form onFormSubmit is invoked  */}
                    <form className="ui form" action="" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label htmlFor="search">Image Search</label>
                            <input name="search" type="text" placeholder="search something like cars, flowers.. etc" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                            
                        </div>
                    </form>
               </div>
            )
    }
}


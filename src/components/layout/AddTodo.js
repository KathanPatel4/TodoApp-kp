import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state= {
        title: '' 
    }

    OnTitle=(e)=> this.setState({ title: e.target.value});
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
        
    }
    
        
     



    render() {
        return (
            <React.Fragment>
                <form  onSubmit={this.onSubmit}  style={ {display: "flex" }}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add Todo"  
                        style={ { flex : 10 }}
                        onChange={this.OnTitle}
                        value={this.state.title}
                    />
                    <button 
                        type="submit" 
                        className="btn" 
                        style={{ flex: 1, padding: "5px" }}
                    >Submit</button>

                </form>
            </React.Fragment>
        )
    }
}

AddTodo.propTypes={
    addTodo: PropTypes.object.isRequired,
}

export default AddTodo

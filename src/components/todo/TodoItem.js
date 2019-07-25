import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle=()=>{
        return{
            background: "#f4f4f4",
            borderBottom: '1px  #ccc dotted',
            padding: '10px 0px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            
            
        }
    }

    
render() {
    const { id, title} = this.props.todo
    const btnStyle ={
        background: "#ff0000",
        float: "right",
        color: "#fff",
        padding: "5px 10px",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        marginRight: "100px",
        
    }
        return (
            <div>
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { "  "}
                    
                    {title}
                    <button  onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >x</button>
                </p>
                
            </div>
                
            </div>
        )
    }
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}



export default TodoItem

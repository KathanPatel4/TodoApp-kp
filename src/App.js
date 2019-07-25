import React,{ Component }from 'react';
import './App.css';


import { Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import Todos  from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
const uuid = require('uuid/v1')


class App extends Component {
  
    state= {
      todos: []
      }

      componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
        // .then(res => this.setState({ todos: res.data }))
      }

      markComplete= (id)=>{
        this.setState({ todos: this.state.todos.map( todo => {
          if( todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;

        }) })
      }

    delTodo=(id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id) ] }));
    }

    addtodo=(title,id) =>{ 
      axios.post('https://jsonplaceholder.typicode.com/todos', { 
        some_id: uuid(),
        title,
        completed: false
      })
      .then(res =>  this.setState({ todos: [...this.state.todos , res.data]} ) 
        );
    }
    
       

    
    render(){

      console.log(this.props.title);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={(props, id)=> (
              <React.Fragment>
              <AddTodo addTodo={this.addtodo} />
              <Todos key= {id} todos ={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
           
            
          </div>
        </div>
      </Router>

    );
  }
}

export default App;

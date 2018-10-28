import React from 'react';
const TodoContext = React.createContext();

export class TodoProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 0, text: "Extreme", completed: false },
                { id: 1, text: 'Text', completed: false },
                { id: 2, text: 'Image', completed: false },
            ],
        };
        this.updateToDos = this.updateToDos.bind(this);
    }

    updateToDos(text) {
        const id = this.state.todos.length;
        const todos = Array.from(this.state.todos);
        const completed = false;
        todos.push({ id, text, completed });
        this.setState({ todos });
    }

    deleteToDos = () => {
        const todos = this.state.todos;
    }

    render() { 
        return ( 
            <TodoContext.Provider value={{
                deleteToDos: this.deleteToDos,
                updateToDos: (text) => this.updateToDos(text),
                todos: this.state.todos,
            }}>
                { this.props.children }
            </TodoContext.Provider>
         );
    }
};

export const TodoConsumer = TodoContext.Consumer;
 

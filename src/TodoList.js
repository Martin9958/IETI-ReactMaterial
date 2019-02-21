import React from 'react';
import {Todo} from './Todo';
import Card from '@material-ui/core/Card';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
                    <Card>
                          {todoList}
                    </Card>

         );


    }

}
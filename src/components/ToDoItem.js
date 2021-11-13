import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.toDoItem = this.props.toDoItem;
        this.toDoItemNum = this.props.toDoItemNum;
    }
    render() {
        return <div className="p-4 flex  mr-auto ml-auto w-2/3  mt-5">
            <p>{this.props.toDoItemNum+"."}</p>
            <p className="font-mono mr-auto ml-auto">{this.props.toDoItem}</p>
        </div>;
    }
}

export default ToDoItem;
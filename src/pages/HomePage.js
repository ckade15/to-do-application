import React from "react";
import ToDoItem from "../components/ToDoItem";

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
            item: "",
            toDoItems: [{item: "", num: 0}]
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearList = this.clearList.bind(this);
    }
    render(){
        if (this.state.loggedIn){
            const toDoItems = this.state.toDoItems.map((item) =>{
                return <ToDoItem toDoItem={item.item} toDoItemNum={item.num}/>
            });
            
            return (
                <div className="w-full bg-red-300 min-h-screen border-none flex flex-col">
                    <h1 className="text-blue-900 text-4xl font-bold font-mono text-center mt-8">To-Do List</h1>
                    <div className="w-2/3 bg-red-100 ml-auto mr-auto mt-5 p-5">
                        <form className="mr-auto ml-auto flex justify-center mt-4" onSubmit={this.handleSubmit}>
                            <h3 className="text-blue-900 text-center font-semibold pt-1">Add item to list:</h3>
                            <input className="ml-3" onChange={this.handleChange} value={this.state.item}></input>
                            <button type="submit" className="bg-blue-400 rounded-md p-1 ml-3 text-white border-blue-700 border-2 hover:border-red-700 hover:bg-red-200 hover:text-blue-700" onClick={this.handleSubmit}>Add Item</button>
                        </form>
                        <h1 className="text-red-900 font-mono mt-6 text-center font-bold text-2xl">To-Do List Items</h1>
                        <div className="w-2/3 ml-auto mr-auto bg-blue-200 mt-5 p-5 flex justify-center flex-col">
                            
                            {this.state.toDoItems.length > 1 ? this.state.toDoItems.map(item => {
                                if (item.num >= 1){
                                  return <ToDoItem toDoItem={item.item} toDoItemNum={item.num}/>  
                                }
                                
                            }) : <h1 className="text-red-600 text-center font-bold pt-1 font-mono text-lg">No items in list</h1>}
                            {this.state.toDoItems.length > 1 ? <button className="bg-blue-400 rounded-md p-1 text-white border-blue-700 border-2 hover:border-red-700 hover:bg-red-200 hover:text-blue-700 mr-auto ml-auto mt-4" type="button" onClick={this.clearList}>Clear List</button>: null}
                        </div>
                        {/*{this.state.toDoItems.map((item) =>{
                            return <ToDoItem toDoItem={item.item} toDoItemNum={item.num}/>
                        })}*/}
                    </div>
                </div>
            );
        }
    }
    handleChange(event){
        this.setState((state) =>{
            return {
                item: event.target.value
            }
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const num = this.state.toDoItems.length;
        this.setState({
            item: "",
            toDoItems: [...this.state.toDoItems, {item: this.state.item, num: num}]
        });
        

    }
    clearList(event){
        event.preventDefault();
        this.setState({
            toDoItems: [{item: "", num: ""}]
        });
    }

}

export default HomePage;
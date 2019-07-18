import React, {Component} from 'react' 

class AddTodo extends Component {
    
    state ={
        content:''
    }

    handleChange =e=>{
        this.setState({
            content: e.target.value
        })
    }
    
    handleSubmit =e=>{
        e.preventDefault()
        this.props.addTodo(this.state)
        //e.target.input.value=""
        this.setState({
            content:""
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" id="input" value={this.state.content} onChange={this.handleChange} placeholder="Enter todo"/>
                </form>
            </div>
        )
    }
}

export default AddTodo
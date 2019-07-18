import React from 'react'

const Todos =({todos, deleteTodo})=>{ //Destructing-We don't need to use props

const todoList= todos.length <= 0 ? <p>"No Todo, You are free"</p>:    

<div className="todos collection">
        {todos.map(todo=>
            <div className="collection-item" key={todo.id}>
                <span onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
        )}
</div>


return( 
    <div className="todos collection">
        {todoList}
    </div>
)
}

export default Todos
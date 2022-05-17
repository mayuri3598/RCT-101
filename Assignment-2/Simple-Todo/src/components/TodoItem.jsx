import "./todo.css"
export const TodoItem = ({ todo,index}) => {
    return(
        <div>
            <div className="todoItem" >
            {index + 1}. { todo.title }
               <input type="checkbox"  />
            </div>
            
         
        </div>
    )
}
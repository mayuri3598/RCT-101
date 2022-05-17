import "./todocompleted.css"

const TodoCompleted=({todocomp})=>{
    return(
        <div className="container2">
            <h2>{todocomp.text}</h2>
            <input className="checked2" type="checkbox" checked/> 
        </div>
    )
}
export default TodoCompleted
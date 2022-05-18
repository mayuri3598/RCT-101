import './form.css'
import {useState} from 'react'
function Form(){
    const [form, setForm]=useState({
        image:"",
        res_name:"",
        costforone:0,
        address:"",
        card:false,
        rating:0,
        totalvotes:0,
        cat:""
      })
    
    const handleChange=(e)=>{
        const {id, value}= e.target;
        setForm({...form, 
            [id]:value})
    } 

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/restaurants",{
            method:"POST",
            body:JSON.stringify(form),
            headers:
            {"Content-type":"application/json"}
        });
        alert("Restaurant added")

    }
    // http://cdn.onlyinyourstate.com/wp-content/uploads/2018/02/10986885_962136263798806_2948506855460679605_o.jpg

    return(
        <form onSubmit={handleSubmit} className="restform">
            <span>
            <h3>Image To be shown</h3>
            <input onChange={handleChange} id='image' type="url" placeholder="Enter Image Url"></input>
            </span>
            <span>
            <h3>Name of your restaurant</h3>
            <input onChange={handleChange} id='res_name' type="text" placeholder="Enter restaurant name"></input>
            </span>
            <span>
            <h3>Cost for one?</h3>
            <input  onChange={handleChange} id='costforone' type="number" placeholder="Enter cost for one"></input>
            </span>
            <span>
            <h3>What's the adresss?</h3>
            <input  onChange={handleChange} id='address' type="text" placeholder="enter address"></input>
            </span>
            <span>
            <h3>Method of payment?</h3>
            <input id='card' type="text"  onChange={handleChange} placeholder="is card accepted, true/false"></input>
            </span>
            <span>
            <h3>Enter Rating</h3>
            <input id='rating' type="number"  onChange={handleChange} placeholder="Enter rating"></input>
            </span>
            <span>
            <h3>Total Votes given</h3>
            <input id='totalvotes' type="number"  onChange={handleChange} placeholder="Total votes"></input>
            </span>
            <span>
            <h3>Category</h3>
            <input id='cat' type="text" placeholder="enter Category"  onChange={handleChange}></input>
            </span>
            <span>
            <input className='submitbutton' type="submit" value="submit"></input>
            </span>
        </form>
    )

}
export {Form}
// https://media.istockphoto.com/photos/happy-waiter-serving-food-to-group-of-friends-in-a-pub-picture-id1307190527?b=1&k=20&m=1307190527&s=170667a&w=0&h=_GZiHqd9mIhvg_tMT-VwIGlPDeZUY6zUorx5XvQM358=
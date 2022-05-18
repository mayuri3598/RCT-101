import "./rescomponents.css"

function RestComponents({item}){
    return (
        <div className="container">
            <img src={item.image}></img>
            <div className="detailsection">
                <div>
                    <h3>Name: {item.res_name}</h3>
                    <p>{item.address}</p>
                    <p>Costs Rs.{item.costforone}/ for one</p>
                    <p>{item.card==true?"Accepts Card Payments only":"Accepts all Method of payments"}</p>
                </div>
                <div>
                    <h3 className="ratingstyl">{item.rating}</h3>
                    <p>{item.totalvotes} votes</p>
                </div>
            </div>
           

        </div>
    )
}
export {RestComponents}
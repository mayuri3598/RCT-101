
import './table.css'
export const Table = ({data}) => {

    // console.log(data)
    return (
      <div id="main">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((e)=>(
                <tr key={e.id} className="row">
                <td className="first_name">{e.username}</td>
                <td className="last_name">{e.age}</td>
                <td className="email">{e.address}</td>
                <td className="gender">{e.department}</td>
                <td className="age">{e.salary}</td>
                <td className="tenth_score">{e.marital_status}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    );
  };
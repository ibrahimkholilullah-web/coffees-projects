import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
    const loadData = useLoaderData()
    const [users, setUser] = useState(loadData)
    const handleDeleted = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remaim = users.filter(user => user._id !== id)
                      setUser(remaim)
                    }
                })

            }
          });
    }
    return (
        <div>
            {
                users.length
            }
            <div>
            
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>e/X</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                        users.map(usr => <>
                        <tr key={usr._id}>
                      <th>{usr._id}</th>
                      <td>{usr.name}</td>
                      <td>{usr.email}</td>
                      <td>
                        <button className='btn m-1'>E</button>
                        <button onClick={() => handleDeleted(usr._id)} className='btn m-1'>X</button>
                      </td>
                    </tr>
                        </>)
                    }
                   
                   
                  </tbody>
                </table>
             
            </div>
        </div>
    );
};

export default User;
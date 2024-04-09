<<<<<<< HEAD
=======

>>>>>>> f6529f8dbb3eca8b61f6b5c01e102dbb9a4e8add
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';

function Users() {
    const [reggs, setReggs] = useState([]);
    const [filterInput] = useState('');

    useEffect(() => {
        findReggs();

         // Initialize DataTable
         $('#example').DataTable({
            language: {
                emptyTable: "No data available in table",
                // You can customize other messages here if needed
            }
        });

        return () => {
            // Destroy DataTable instance when component unmounts
            $('#example').DataTable().destroy();
        };
    }, []);

    const findReggs = () => {
        $('#example').DataTable();
        axios.get('http://localhost:5001/api/users')
            .then(response => {
               
                console.log(response.data);
                setReggs(response.data);
                // Initialize DataTables only after data is fetched
               
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="card">
            <h5 className="card-header">Users List</h5>
            <div className="card-body">
                <div className="container">
                    {/* <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                        <input className="form-control" type="search" value={filterInput} onChange={e => setFilterInput(e.target.value)} />
                    </div> */}

                    <table id="example" className="table table-bordered center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reggs.filter(regg => regg.firstName.toLowerCase().includes(filterInput.toLowerCase())).map(regg => (
                                <tr key={regg.id}>
                                    <td>{regg.id}</td>
                                    <td>{regg.firstName}</td>
                                    <td>{regg.lastName}</td>
                                    <td>{regg.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

>>>>>>> f6529f8dbb3eca8b61f6b5c01e102dbb9a4e8add
=======
>>>>>>> Demo

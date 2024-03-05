import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [reggs, setReggs] = useState([]);
    const [alert, setAlert] = useState('');
    const [filterInput, setFilterInput] = useState('');

    useEffect(() => {
        findReggs();
    }, []);

    const findReggs = () => {
        axios.get('http://localhost:5001/api/users')
            .then(response => {
                setReggs(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const filterBy = (list, value) => {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return list.filter(regg => regg.firstName.indexOf(value) > -1);
    };

    return (
        <div className="container">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                <input className="form-control" type="search" value={filterInput} onChange={e => setFilterInput(e.target.value)} />
            </div>

            <table className="table table-bordered center">
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
    );
}

export default Users;

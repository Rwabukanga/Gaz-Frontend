import React, { useState } from 'react';
import axios from 'axios';

function AddBranch() {
  const [branch, setBranch] = useState({});
  const [alert, setAlert] = useState('');

  const addBranch = (e) => {
    e.preventDefault();
    if (!branch.firstName || !branch.lastName || !branch.email) {
      setAlert('Please fill all fields');
    } else {
      const newBranch = {
        firstName: branch.firstName,
        lastName: branch.lastName,
        email: branch.email
      };

      axios.post('http://localhost:5001/api/users', newBranch)
        .then(response => {
          setAlert(response.data.description);
          // You can handle redirect or any other action after successful submission here
        })
        .catch(error => {
          setAlert('An error occurred while submitting the form');
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="container">
      <form onSubmit={addBranch}>
        <div className="row g-0">
          <div className="col-sm-6 col-md-8">
            <label>First Name</label>
            <input type="text" id="firstName" className="form-control" value={branch.firstName || ''} onChange={(e) => setBranch({...branch, firstName: e.target.value})} />
          </div>
        </div>

        <div className="row">
          <div className="col-8 col-md-6">
            <label>Last Name</label>
            <input type="text" id="lastName" className="form-control" value={branch.lastName || ''} onChange={(e) => setBranch({...branch, lastName: e.target.value})} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
            <label>E-mail</label>
            <input type="email" id="email" className="form-control" value={branch.email || ''} onChange={(e) => setBranch({...branch, email: e.target.value})} />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-9">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>

      {alert && <div className="alert alert-warning">{alert}</div>}
    </div>
  );
}

export default AddBranch;

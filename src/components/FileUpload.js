import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5001/files/uploadd', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
      // Handle success
    })
    .catch(error => {
      console.error(error);
      // Handle error
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default FileUpload;

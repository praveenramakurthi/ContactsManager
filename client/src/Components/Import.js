import React from 'react';

const Import = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };
  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="btn btn-primary">
        <i className="bi bi-arrow-down"></i>
        <i className="bi bi-arrow-up"></i> Import CSV
      </label>
    </div>
  );
};

export default Import;

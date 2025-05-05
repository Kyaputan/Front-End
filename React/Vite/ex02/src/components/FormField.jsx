import React from 'react';

const FormField = ({ label, id, type = 'text', value, onChange, rows }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="form-control"
          rows={rows || 3}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;

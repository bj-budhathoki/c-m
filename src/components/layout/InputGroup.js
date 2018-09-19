import React from "react";
import classname from "classname";
const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  console.log(error);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classname("form-control form-control-lg is-invalid", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <h5 className="invalid-feadback">{error}</h5>}
    </div>
  );
};
export default InputGroup;

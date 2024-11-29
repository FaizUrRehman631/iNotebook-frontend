import React from 'react'

const Alert=(props)=> {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height: '20px' }}>
    {props.alert && 
      <div
        className={`alert ${
          props.alert.type === "error" ? "alert-danger" : "alert-success"
        } alert-dismissible fade show`}
        role="alert"
      >
        <strong> {capitalize(props.alert.type)}</strong>:{" "}
        {capitalize(props.alert.msg)}
      </div>}
      </div>
    )
}
export default Alert;
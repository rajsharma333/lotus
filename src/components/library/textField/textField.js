import React, { useState } from 'react';
import './text-field.css';

const TextField = (props) => {
  const  {
    type,
    name,
    value,
    customClass,
    label,
    id,
    labelPos,
    placeholder,
    formState,
    ...others
  } = props.source;

  const [form, setInputValue] = useState({
    name: '',
    age: ''
  });

  const handleOnChange = (e) => {
    setInputValue({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form);
  }

  const getWrapperClass = () => {
    let wrapperClass = 'input-text ';
    if(customClass){wrapperClass += customClass;}
    if(labelPos){wrapperClass += ' ' + labelPos}
    return wrapperClass;
  }


  return (
    <div className='input-text'>
      { label ? <label>{label}</label> : null}
      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder ? placeholder : label}
        {...others}
      />
    </div>
  )

}

export default TextField;

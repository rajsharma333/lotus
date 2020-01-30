import React from 'react';
import TextField from '../textField/textField';

const FormComponent = (props) => {
  const {
    source,
    labelPos,
    formHeading,
    formState,
    ...others
  } = props;


  return (
    <div className={`label-pos-${labelPos}`}>
      <form name="jobform">
      {formHeading && <h3>{formHeading}</h3>}
      {
        source.map( field =>
          <TextField source={field}/>
        )
      }
      <input type="submit"/>
      </form>
    </div>
  )

}

export default FormComponent;

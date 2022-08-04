import { useState } from "react";
import "./Form.modules.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  const[showPass, hidePass]= useState(false);
  const toggleBtn =() => {
     hidePass(prevState => !prevState);
  }
  


  return (
    <div className="formInputd">
      <label>{label}</label>
      <input className="inputd"
      
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
          
        }
     
        focused={focused.toString()}
      />
      
      <span className="spand">{errorMessage}</span>
     
    </div>
  );
};

export default FormInput;
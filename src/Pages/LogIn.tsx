import { useState, useEffect, useContext } from "react";
import "./LogIn.scss";
import FormInput from "../Components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Api/axiosLensaConfig";
import {postItemsLesna} from "../Api/axiosLensa"



function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  let [isAutentificated, setIsAutentificated] = useState(true);

  const onAddToItem = (email, password) => {
   postItemsLesna.postLogin(email,password).then((response) => {
    setValues(response.data)
    console.log(response.data)
    localStorage.setItem("token", JSON.stringify(response.data));
        if (localStorage.token) {
          if (response.data) navigate("/");
          console.log(response.data);
          return response.data;
   } })

  };

  return (
    <div className="appd">
      <form className="formd" onSubmit={handleSubmit}>
        <h1 className="hd">Log In</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button
          className="buttond"
          onClick={() => onAddToItem(values.email, values.password)}
        >
          Submit
        </button>

        <p className="paradb">
          Don't have an account? <Link to="/"> Register </Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;

function data(data: any): string {
  throw new Error("Function not implemented.");
}

import { useState, useEffect } from "react";
import "./LogIn.scss";
import FormInput from "../Components/FormInput";
import axios from "axios";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";


function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [navigate, setNavigate] = useState(false);


  // const submit = async e => {
  //   e.preventDefault();
  
  // const {data} = await axios.post ("https://api.lensa.devebs.net/dashboard/auth/login", {
  //         email,
  //         password,
  //       })
  //       .then((response) => {
  //               console.log(response.data);
  //               if (response.data.accessToken) {
  //                 localStorage.setItem("token", JSON.stringify(response.data));
  //               }
        
  //               return response.data;
  //             });
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
      
  //   setNavigate(true);
  // }
  // if (navigate) {
  //   // return <Navigate to="/"/>;

  // }




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

  //       const onAddToItem = (values) => {
  //       axios.post('https://api.lensa.devebs.net/dashboard/auth/login', {
  //         // email: "ganenko.dmitrii@gmail.com",
  //         // password: "Test123qwe"
  //         values,

  //       })
  //       .then((response) => {
  //         console.log(response.data);

  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })}
  //     console.log(values)
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  const onAddToItem = (email, password) => {
    axios
      .post("https://api.lensa.devebs.net/dashboard/auth/login", {
        email,
        password,
      })
      
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
        return response.data;
      });
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
     
        {/* <p className="paradb">
          {" "}
          Don't have an account? <Link to="/Register"> Register </Link>
        </p> */}
      </form>
    </div>
  );
}

export default LogIn;

function data(data: any): string {
  throw new Error("Function not implemented.");
}

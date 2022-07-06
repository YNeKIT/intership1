import React, { useReducer, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
// import "macro-css";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       width: 400,
//       margin: `${theme.spacing(0)} auto`,
//     },
//     loginBtn: {
//       marginTop: theme.spacing(2),
//       flexGrow: 3,
//       background: "#a8a8a8",
//     },
//     header: {
//       textAlign: "center",
//       background: "#a8a8a8",
//       color: "#fff",
//     },
//     card: {
//       marginTop: theme.spacing(10),
//     },
//   })
// );

// type State = {
//   username: string;
//   password: string;
//   isButtonDisabled: boolean;
//   helperText: string;
//   isError: boolean;
// };

// const initialState: State = {
//   username: "",
//   password: "",
//   isButtonDisabled: true,
//   helperText: "",
//   isError: false,
// };

// type Action =
//   | { type: "setUsername"; payload: string }
//   | { type: "setPassword"; payload: string }
//   | { type: "setIsButtonDisabled"; payload: boolean }
//   | { type: "loginSuccess"; payload: string }
//   | { type: "loginFailed"; payload: string }
//   | { type: "setIsError"; payload: boolean };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "setUsername":
//       return {
//         ...state,
//         username: action.payload,
//       };
//     case "setPassword":
//       return {
//         ...state,
//         password: action.payload,
//       };
//     case "setIsButtonDisabled":
//       return {
//         ...state,
//         isButtonDisabled: action.payload,
//       };
//     case "loginSuccess":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false,
//       };
//     case "loginFailed":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true,
//       };
//     case "setIsError":
//       return {
//         ...state,
//         isError: action.payload,
//       };
//   }
// };

// const Register = () => {
//   const classes = useStyles();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.username.trim() && state.password.trim()) {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: false,
//       });
//     } else {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: true,
//       });
//     }
//   }, [state.username, state.password]);

//   const handleLogin = () => {
//     if (state.username === "abc@email.com" && state.password === "password") {
//       dispatch({
//         type: "loginSuccess",
//         payload: "Login Successfully",
//       });
//     } else {
//       dispatch({
//         type: "loginFailed",
//         payload: "Incorrect username or password",
//       });
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.keyCode === 13 || event.which === 13) {
//       state.isButtonDisabled || handleLogin();
//     }
//   };

//   const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setUsername",
//       payload: event.target.value,
//     });
//   };

//   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setPassword",
//       payload: event.target.value,
//     });
//   };

//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <Card className={classes.card}>
//         <CardHeader className={classes.header} title="Register " />
//         <CardContent>
//           <div>
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="username"
//               type="email"
//               label="Username"
//               placeholder="Username"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="password"
//               type="password"
//               label="Password"
//               placeholder="Parolă"
//               margin="normal"
//               helperText={state.helperText}
//               onChange={handlePasswordChange}
//               onKeyPress={handleKeyPress}
//             />

//             <TextField
//               error={state.isError}
//               fullWidth
//               id="idnp"
//               type="email"
//               label="idnp"
//               placeholder="idnp"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="Email"
//               type="email"
//               label="Email"
//               placeholder="Emailexample@gmail.com"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />

//             <TextField
//               error={state.isError}
//               fullWidth
//               id="Phone"
//               type="Phone"
//               label="Phone"
//               placeholder="Phone Number"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="Function"
//               type="Function"
//               label="Function"
//               placeholder="Function"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="Rol"
//               type="Rol"
//               label="Rol"
//               placeholder="Rol"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>
//         </CardContent>
//         <CardActions>
//           <Link to="/Home">
//             <Button
//               style={{
//                 maxWidth: "550px",
//                 maxHeight: "50px",
//                 minWidth: "382px",
//                 minHeight: "50px",
//               }}
//               variant="contained"
//               color="default"
//               className="Conectbtn"
//               onClick={handleLogin}
//               disabled={state.isButtonDisabled}
//             >
//               Submit
//             </Button>
//           </Link>
//         </CardActions>

//         <p className="RegisterLink">
//           Already have an account?
//           <Link to="/"> Sign in </Link>{" "}
//         </p>
//       </Card>
//     </form>
//   );
// };

// export default Register;

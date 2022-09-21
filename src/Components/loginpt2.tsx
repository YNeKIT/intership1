import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Loginpt = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <li className="listmenu" onClick={() => loginWithRedirect()}>
      <img
        className="mr-10 mt-10"
        width={20}
        height={20}
        src="/images/login.svg"
        alt="closetype"
      />
      Log In
    </li>
  );
};
export default Loginpt;

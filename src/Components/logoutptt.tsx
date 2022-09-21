import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logoutptt = () => {
  const { logout } = useAuth0();

  return (
    <li className="listmenu" onClick={() => logout()}>
      <img
        className="mr-10 mt-10"
        width={20}
        height={20}
        src="/images/logout.svg"
        alt="closetype"
      />
      Log Out
    </li>
  );
};
export default Logoutptt;

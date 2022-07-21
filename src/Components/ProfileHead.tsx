import { useAuth0, User } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
const ProfileHead = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div className=" clear d-if ">
          <img
            className="profileimg mr-10 d-flex cu-p "
            width={35}
            height={35}
            src={user?.picture}
          />
        </div>
      )}
    </>
  );
};
export default ProfileHead;

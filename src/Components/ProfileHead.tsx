import { useAuth0 } from "@auth0/auth0-react";

const ProfileHead = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <img
        className="profileimg mr-10 d-flex cu-p "
        width={22}
        height={22}
        src={user?.picture}
      
      />
      <span className="mr-10">{user?.name}</span>
    </>
  );
};
export default ProfileHead;

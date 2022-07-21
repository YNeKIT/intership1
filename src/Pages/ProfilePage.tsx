
import Drawer from "../Components/Drawer";
import Header from "../Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import Charts from "../Pages/Charts";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isVisible, setIsVisible] = useState(false);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };

  type user = {
    user: void;
    isAuthenticated: any;
  };

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [favorites, setFavorites] = useState<any[]>([]);
  const [blockitems, setBlockItems] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://62ac57b7bd0e5d29af209f98.mockapi.io/favorites")
      .then((res) => {
        console.log(res);
        setFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://62ac57b7bd0e5d29af209f98.mockapi.io/BlockUsers")
      .then((res) => {
        console.log(res);
        setBlockItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://62ac57b7bd0e5d29af209f98.mockapi.io/favorites/${id}`);
    setFavorites((prev) => prev.filter((favorites) => favorites.id !== id));
  };
  const onRemoveBlockItem = (id) => {
    axios.delete(
      `https://62ac57b7bd0e5d29af209f98.mockapi.io/BlockUsers/${id}`
    );
    setBlockItems((prev) => prev.filter((blockitems) => blockitems.id !== id));
  };
  return (
    <>
      <Header toggLeVisibility={toggLeVisibility} />
      <Drawer isVisible={isVisible} toggLeVisibility={toggLeVisibility} />

      <div className="card">
        <h1 className="containerTitle">My Profile</h1>

       { isAuthenticated && (
        <div className="d-if">
        <img
          className="profileimg"
          width={100}
          height={100}
          src={user?.picture}
          alt="picture"
        />
        <h1>{user?.email}</h1>
       
        </div>
        )}
          
        <div className="d-flex justify-between align-center"></div>
      </div>
      <div className="card">
        <h1 className="ml-30">Favorites</h1>

        {favorites.length > 0 ? (
          <List
            dense
            sx={{ width: "100%", maxWidth: 1500, bgcolor: "background.gray" }}
          >
            {favorites.map((favorites) => {
              const labelId = `checkbox-list-secondary-label-${favorites}`;
              return (
                <ListItem
                  key={labelId}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(favorites)}
                      checked={checked.indexOf(favorites) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton onClick={() => onRemoveItem(favorites.id)}>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${favorites + 1}`}
                        src={`/static/images/avatar/${favorites + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`${favorites.fullname}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <div className="noFavorites">
            <img
              className="mr-50 cu-p d-flex "
              width={80}
              height={80}
              src="/images/sadf.svg"
              alt="sad"
            />
            <b> Sorry, you don't have friends </b>
          </div>
        )}
      </div>
     

      <div className="card">
        <h1 className="ml-30">Block Users</h1>
        {blockitems.length > 0 ? (
          <List
            dense
            sx={{ width: "100%", maxWidth: 1500, bgcolor: "background.gray" }}
          >
            {blockitems.map((blockitems) => {
              const labelId = `checkbox-list-secondary-label-${blockitems}`;
              return (
                <ListItem
                  key={labelId}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(blockitems)}
                      checked={checked.indexOf(blockitems) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => onRemoveBlockItem(blockitems.id)}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${blockitems + 1}`}
                        src={`/static/images/avatar/${blockitems + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`${blockitems.fullname}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <div className="noFavorites">
            <img
              className="mr-50 cu-p d-flex "
              width={80}
              height={80}
              src="/images/smilept2.svg"
              alt="smile"
            />
            <b>You don't have Block Users </b>
          </div>
        )}
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"></div>
        </div>
      </div>
      <Charts/>
    </>
  );
};
export default ProfilePage;

import react, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import "./postcard.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
interface Props {
  toggLeVisibility: () => void;
}

function PostCard({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<any[]>([]);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const { userProfile, setUserProfile, postCard, setPostCard, onRemoveItem, postitem, mockapiCard } =
    useContext(UserContext);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {postCard?.map((postCard) => (
        <div className="post" key={postCard.id}>
          <div className="postWrapper ">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src={postCard.avatar}
                  alt="avatar"
                />

                <span className="postUsername">
                  <h4>
                    {" "}
                    {postCard.username} {userProfile.first_name}{" "}
                  </h4>
                </span>
                <span className="postDate"></span>
              </div>
              
              

              <div className="postTopRight">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img
                    className="postProfileImg cu-p"
                    src="/images/dotscard.svg"
                    alt="avatar"
                  />
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}> <h4 onClick={() => mockapiCard.onRemoveItemCard(postCard.id)}>Delete </h4></MenuItem>

                  <MenuItem onClick={handleClose}> Edit</MenuItem>

                </Menu>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText ml-10">{postCard.posttext}</span>
              <img className="postImg" src={postCard.Postimg} alt="postimg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon mr-15"
                  src="/images/heardlike.svg"
                  onClick={likeHandler}
                  alt="heart"
                />
                <img
                  className="likeIcon"
                  src="/images/dislike.svg"
                  onClick={likeHandler}
                  alt="likeicon"
                />
                <span className="postLikeCounter"> people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText"> comments</span>
                <img
                  className="likeIcon ml-5 mt-7"
                  src="/images/message.svg"
                  alt="comenticon"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PostCard;

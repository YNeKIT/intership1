import react, { useEffect } from "react";
import { useState, useContext } from "react";
import {UserContext} from "../UserContext"
import "./postcard.scss";

 function PostCard({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<any[]>([]);
 
  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const {userProfile, setUserProfile, postCard, setPostCard} = useContext(UserContext);
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <>




    
{postCard.map((postCard) => (
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img
              className="postProfileImg"
              src="/images/profile.svg"
              alt=""
            />
            <span className="postUsername">
              <h4>{postCard.username}</h4>
            </span>
            <span className="postDate"></span>
          </div>
          <div className="postTopRight">
          
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Some text</span>
          <img className="postImg" src="/images/natura.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon mr-15" src="/images/heardlike.svg" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="/images/dislike.svg" onClick={likeHandler} alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
            <img className="likeIcon ml-5 mt-7" src="/images/message.svg"  alt="" />
          </div>
        </div>
      </div>
    </div>


))}

    </>
  );
}
export default PostCard;




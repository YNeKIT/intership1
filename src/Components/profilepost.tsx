import react from "react";
import "./profilepost.scss";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "../Api/axiosMockConfig";
import PostCard from "./PostCard";
import {onAddToItemPost} from  "../Api/axiosMock";

function ProfilePost() {
  const { userProfile, setUserProfile } = useContext(UserContext);

  const [values, setValues] = useState({
    posttext: "",
    postimg: "",
   
  });

  const [posttext, setPostText] = useState("");
  const [postimg, setPostImg] = useState("");

  const postData = (e) => {
    e.preventDefault();
    onAddToItemPost.postaPost(postimg,
      posttext,
      userProfile)
      .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/images/profile.svg" alt="" />
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
            value={posttext}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <img
                className="likeIcon mr-15"
                src="/images/photovideo.svg"
                alt=""
              />
              <span className="shareOptionText">Photo or Video</span>
              <input
                className="searchB"
                placeholder="Paste link here..."
                value={postimg}
                onChange={(e) => setPostImg(e.target.value)}
              />
            </div>
            <div className="shareOption">
              <img
                className="likeIcon mr-15"
                src="/images/feelings.svg"
                alt=""
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={postData}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfilePost;

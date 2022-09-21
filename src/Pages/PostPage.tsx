import react, { useEffect } from "react";
import Header from "../Components/Header";
import Drawer from "../Components/Drawer";
import Table from "../Components/table";
import Profile from "../Components/ProfileHead";
import { useState, useContext } from "react";
import axios from "axios";
import {UserContext} from "../UserContext"

import ProfilePost from "../Components/profilepost";
import PostCard from "../Components/PostCard";



 function PostPage({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<any[]>([]);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const {userProfile, setUserProfile} = useContext(UserContext);
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <>
    <Header toggLeVisibility={toggLeVisibility}/>
    <Drawer isVisible={isVisible} toggLeVisibility={toggLeVisibility} />
    <ProfilePost/>
    <PostCard post={post}/>
    
    </>
  );
}
export default PostPage;
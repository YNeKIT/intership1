
import axios from "./axiosMockConfig";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

export const getItems = {
  getPosts: () => {
    return axios.get("/Posts");
  },
  getBlockUsers: () => {
    return axios.get("/BlockUsers");
  },
  getFavorites: () => {
    return axios.get("/favorites");
  },
  getContacts: () => {
    return axios.get("/contacts");
  },
};

export const onAddToItemPost = {
  postblockItem: (contact) => {
    return axios.post("/BlockUsers",{contact});
  },
  postFavorites: (contact) => {
    return axios.post("/favorites",{contact});
  },
  postaPost: (Postimg,posttext,userProfile) => {
    return axios.post("/Posts", {
      Postimg,
      posttext,
      userProfile
    })
  }
};

export const mockapiCard = {
  onRemoveItemCard: (id) => {
    return axios.delete(`/Posts/${id}`);
  },
  onRemoveBlockItem: (id) => {
    return axios.delete(`/BlockUsers/${id}`);
  },
  onRemoveFavorites: (id) => {
    return axios.delete(`/favorites/${id}`);
  },
  onRemoveContact: (id) => {
    return axios.delete(`/contacts/${id}`);
  }

};

// mockapi.onRemoveItemCard(4).then(res=>{
//   setAvatar(res)
// });

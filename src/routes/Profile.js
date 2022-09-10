import { authService, dbService } from "../fbase";
import React, { useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";

const Profile = ({ userObj }) => {
  const onLogOutClick = () => authService.signOut();

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequests";
// import FollowersModal from "../FollowersModal/FollowersModal";
import User from "../User/User";

import "./FollowersCard.css";

const FollowersCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}

      {/* <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      /> */}
    </div>
  );
};

export default FollowersCard;

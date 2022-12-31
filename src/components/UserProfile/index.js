import React from "react";
import Button from "../Button";
import "./userProfile.css";

const UserProfile = (props) => {
  console.log("props  :: ", props);
  const {
    id = "",
    name = "",
    mailid = "",
    phoneNumber = "",
    contactType = "personal",
    editContact = {},
    deleteContact = {},
  } = props;

  return (
    <div className="userProfileCard">
      <div className="detailsRow">
        <div>
          <span>
            <b>Name:</b> {name || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Mail:</b> {mailid || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Mobile:</b> {phoneNumber || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Contact type:</b> {contactType || "-"}
          </span>
        </div>
      </div>
      <div className="editDeleteRow">
        <Button
          name="Edit"
          className="bgGreen"
          onClick={() => editContact(id)}
        />
        <Button
          name="Delete"
          className="bgRed"
          onClick={() => deleteContact(id)}
        />
      </div>
    </div>
  );
};
export default UserProfile;

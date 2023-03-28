import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loggedInUserData } from "../home/loginSlice";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import image from "../../assets/logo.png";
import { Logout } from "../../assets";

function UserLoggedIn() {
  console.log(useSelector(loggedInUserData));
  const username = useSelector(loggedInUserData).payload.userid;
  const org = useSelector(loggedInUserData).payload.org;
  let organization;
  if (org == "sro") organization = "Sub Registrar Office";
  else if (org == "revenue") organization = "Revenue Office";
  else if (org == "bank") organization = "Bank";

  const [viewLoggedInUser, setviewLoggedInUser] = useState(false);

  const accountIconClickHandler = () => {
    setviewLoggedInUser(true);
  };

  const hideLoggedInUser = () => {
    setviewLoggedInUser(false);
  };

  return (
    <div>
      <IconButton
        size="large"
        onClick={accountIconClickHandler}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {viewLoggedInUser && (
        <Menu
          sx={{ mt: "5.75vh" }}
          id="menu-appbar"
          // anchorEl={viewUserDetails}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(viewLoggedInUser)}
          onClick={hideLoggedInUser}
        >
          <div className="user-details">
            <a className="logout-navbar" href="/">
              <Logout />
              Logout
            </a>
            <div className="username-organization">
              <h6>{`Username : ${username}`}</h6>
              <h6>{`Organization : ${organization}`}</h6>
            </div>
          </div>
        </Menu>
      )}
    </div>
  );
}

export default UserLoggedIn;

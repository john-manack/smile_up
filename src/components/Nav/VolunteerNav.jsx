import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import smilelg from "../../images/smilelg.gif";
import bell from "../../images/bell.png";
import profile from "../../images/profile.png";

const VolunteerNav = ({ userInfo }) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      background: "rgb(0,214,203)",
    },
  });
  let location = useLocation();

  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const smileI = (
    <img src={smilelg} alt="SmileUp Logo" height="50px" width="80px" />
  );
  const bellI = <img src={bell} alt="Bell Icon" height="20px" width="20px" />;
  const profileI = (
    <img src={profile} alt="Profile Icon" height="20px" width="20px" />
  );

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/events"
        selected={"/events" === location.pathname}
        label="Events"
        value="events"
        icon={bellI}
      />
      <BottomNavigationAction
        component={Link}
        to="/dash"
        selected={"/dash" === location.pathname}
        value="Dash"
        icon={smileI}
      />
      <BottomNavigationAction
        component={Link}
        to={`/profile/${userInfo.id}`}
        selected={`/profile/${userInfo.id}` === location.pathname}
        label="Profile"
        value="profile"
        icon={profileI}
      />
    </BottomNavigation>
  );
};
export default VolunteerNav;
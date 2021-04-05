import AdminNav from "./AdminNav";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import Fab from "@material-ui/core/Fab";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const AdminEvents = () => {
  return (
    <div>
      <h1>Events</h1>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "rgb(250, 193, 135)", height: "74vh" }}
          >
            <h1>Info inside or component goes here</h1>
          </Typography>
        </Container>
      </React.Fragment>
      <div className="footer"></div>
      <Fab style={{backgroundColor:"rgb(0,214,203)", position: "absolute", right:6, bottom:80, minHeight:80, minWidth:80}} >
      <AddCircleSharpIcon />
      </Fab>
      <div className="footer">
        <AdminNav />
      </div>
    </div>
  );
};

export default AdminEvents;

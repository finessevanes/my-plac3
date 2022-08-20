import React from "react";
import Button from '@mui/material/Button';


const Dashboard = ({ account }) => {
    <Button variant="contained">Hello World</Button>
  if (account) {
    return (
      <>
        <p> Yay account!</p>
      </>
    );
  } else {
    return(
    <>
      <p> No account</p>
    </>
    );
  }
};

export default Dashboard;
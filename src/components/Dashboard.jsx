import React from "react";
import Button from '@mui/material/Button';


const Dashboard = ({ account }) => {
  if (account) {
    return (
      <>
        <Button variant="contained">Hello World</Button>
        <p> Yay account!</p>
      </>
  );
  } else {
    return(
      <>
        <Button variant="contained">Hello World</Button>    
        <p> No account</p>
      </>
    );
  }
};

export default Dashboard;
import React from "react";
import Button from '@mui/material/Button';
import { useAccount, useProvider, useContract } from 'wagmi'

const Dashboard = () => {
  const { address } = useAccount()
  if (address) {
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
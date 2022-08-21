import React from "react";
import Button from '@mui/material/Button';
import { useAccount, useProvider, useContract } from 'wagmi'
import { WorldIDWidget } from "@worldcoin/id";
import Profiles from './Profiles'
import PublicationCard from './PublicationCard'

const Dashboard = () => {

  const { address } = useAccount()
  if (address) {
    return (
      <>
        <WorldIDWidget
          actionId="wid_staging_b7f41eda52d89baab9bd3bb99fb38d4a" // sofie's
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
        />
        <p> Yay account!</p>
        <Profiles />
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
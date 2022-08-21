import React from "react";
import { useAccount } from 'wagmi'
import { WorldIDWidget } from "@worldcoin/id";
import Profiles from './Profiles'
import SignupForm from './SignupForm'

const Dashboard = () => {
  const { address } = useAccount()

  return (
    <>
      {address && (
        <div style={{ border: '2px solid red', textAlign: 'center', flexDirection: 'column' }}>
          <WorldIDWidget
            actionId="wid_staging_b7f41eda52d89baab9bd3bb99fb38d4a" // sofie's
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
          />
          <p>Welcome!
            Connect your wallet to see recommendations curated by your trusted communities</p>
          <Profiles />
        </div>
      )}
      {!address && (
        <>
          <h1>No wallet</h1>
          <SignupForm/>
        </>
      )}
    </>
  )
};

export default Dashboard;
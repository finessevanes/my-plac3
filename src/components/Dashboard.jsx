import { useState, useEffect } from "react";
import { WorldIDWidget } from "@worldcoin/id";
import { useAccount, useProvider, useContract, useSigner } from "wagmi";
import contractInterface from "../utils/abi.json";
import Profiles from './Profiles'
import SignupForm from './SignupForm'

const Dashboard = () => {
  const [isAddressLensHolder, setIsAddressLensHolder] = useState(false)

  const provider = useProvider();
  const { address } = useAccount();

  const contractProvider = useContract({
    addressOrName: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d',
    contractInterface: contractInterface,
    signerOrProvider: provider,
  });

  const checkIfUserHoldsTicket = async (addy) => {
    try {
      // let confirmOwnership = await contractProvider.getConfirmOwnership(addy);
      console.log('contractProvider', contractProvider)
      // const isOwner = await contractProvider.ownerOf('31286')
      // console.log('isOwner', isOwner)

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (address) {
      checkIfUserHoldsTicket(address);
    }
  });

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
          {isAddressLensHolder && <h1>I own lens</h1>}
          {!isAddressLensHolder && <h1>I don't have lens</h1>}
          <Profiles />
        </div>
      )}
      {!address && (
        <>
          <h1>No wallet</h1>
          {isAddressLensHolder && <h1>I own lens</h1>}
          {!isAddressLensHolder && <h1>I don't have lens</h1>}
          <SignupForm />
        </>
      )}
    </>
  )
};

export default Dashboard;
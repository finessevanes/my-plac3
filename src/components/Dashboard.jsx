import { useState, useEffect } from "react";
import { useAccount, useProvider, useContract, useSigner } from "wagmi";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import contractInterface from "../utils/abi.json";
import Publications from './Publications'
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

  if (isAddressLensHolder) {
    return (
      <>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>VL</Avatar>
      <p>vani</p>
      <Publications />
      </>
    )
  } else {
    // TODO: return RecommendedPublications but blocked on lens API
    return (
      <>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>VL</Avatar>
      <p>vani</p>      
      <Publications />
      </>
    )
  }

};

export default Dashboard;
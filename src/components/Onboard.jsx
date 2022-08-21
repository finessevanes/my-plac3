import { WorldIDWidget } from "@worldcoin/id";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Onboard = () => {
  return(
    <>
      <p>
        Welcome!
        Connect your wallet and verify your personhood to see recommendations curated by your trusted communities
      </p>
      <ConnectButton/>
      <WorldIDWidget
        actionId="wid_staging_b7f41eda52d89baab9bd3bb99fb38d4a" // sofie's
        signal="my_signal"
        enableTelemetry
        onSuccess={(verificationResponse) => console.log(verificationResponse)} // TODO: pass the proof to the API / smart contract
        onError={(error) => console.error(error)}
      />
    </>
  );

};

export default Onboard;
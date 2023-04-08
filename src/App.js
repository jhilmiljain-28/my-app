// import logo from './logo.svg';
import './App.css';
import { ConnectKitButton } from 'connectkit';
import button from "react"
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import contractAddress from "../src/utils/constants"
import ABI  from "../src/contracts/abi.json"
function App() {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: ABI,
    functionName: "addDoctor",
    args: [
      "Rahul", "MBBS"
    ],
    overrides: {
      value: 1000,
    },
    onError: (error) => {
      console.log("Error", error);
    },
    onSuccess: (result) => {
      console.log("Success", result);
    },
  });
  const { data, write, error } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({ hash: data?.hash });


  useEffect(() => {
    console.log("isSuccess", isSuccess);
    console.log("error", error);
    if (isSuccess) {
      toast({
        title: "Token Created",
        description: "Your token has been created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: "There was an error creating your token: " + error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, error]);


  return (
    <div>
      <ConnectKitButton />
      <button onclick={()=>{
        write();
      }}>
        Activate Lasers
      </button>
<p>HELLo</p>

    </div>


  );
}

export default App;

import { ethers } from 'ethers';
// import ABI from "./abi.json";
import { contractAddress } from "@/routes";
export const getEthereumObject = () => {
  return typeof window !== 'undefined' ? window.ethereum : null;
};


// Function to create an ethers provider
const createProvider = () => {
  // Check if MetaMask is installed
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    console.error("Make sure you have MetaMask installed!");
    return null;
  }
};

/**
 * Grab an ethereum account
 * using ethers.js provider to get the connected account
 * @type {() => void}
 */
export const getEthereumAccount = async () => {
  try {
    // Create an ethers provider
    const provider = createProvider();

    // Check if provider is created successfully
    if (!provider) return null;

    // Request access to the user's MetaMask account
    const accounts = await provider.send("eth_requestAccounts", []);

    // If accounts are returned, return the first account
    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("Connect your MetaMask account...");
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return null;
  }
};


/**
 * Check if user has a minted nft imnage.
 *
 * @type {() => void}
 */

// export const getNFTImage = async (account: any) => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window?.ethereum as any);

//     const signer = provider.getSigner();

//     const contractInstance = new ethers.Contract(
//       contractAddress,
//       ABI.abi,
//       signer
//     );

//     const image = await contractInstance.ownerToToken(account);

//     const token = await contractInstance.tokenURI(image);
//     let tt = "";

//     if (token.startsWith("ipfs://")) {
//       tt = `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
//         token.split("ipfs://")[1]
//       }`;
//     }

//     const tokenMetaday = await fetch(tt).then((res) => res.json());

//     if (tokenMetaday) {
//       if (tokenMetaday.image.startsWith("ipfs://"))
//         return `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
//           tokenMetaday.image.split("ipfs://")[1]
//         }`;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };



/**
 * Listen to announcements.
 *
 * @type {() => void}
 */



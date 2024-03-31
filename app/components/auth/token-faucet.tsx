"use client"

import { useState, useEffect } from 'react';

const TokenFaucet = () => {
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a token every minute
      setTokens(prevTokens => prevTokens + 1);
    }, 30000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);

  const claimTokens = () => {
    // Call the function to update user session
    try {
      // Here you can make an API call or perform any other action to update the user session
      console.log("Claiming tokens...");
      // For demonstration purposes, let's simulate an update with a delay of 2 seconds
      setTimeout(() => {
        console.log("Tokens claimed successfully!");
      }, 2000);
    } catch (error) {
      console.log("Error claiming tokens:", error);
    }
  };

  return (
    <span onClick={claimTokens} className="cursor-pointer">
      Claim: {tokens}
    </span>
  );
};

export default TokenFaucet;

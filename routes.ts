/**
 * array routes that are accessible to the public
 *
 * @type {string[]}
 */
export const publicRoutes = ["/", "/about", "/contact", "/price", "/faucet", "/register", "/login"];

/**
 * API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile";

/**
 * The Contract Address for the nft Minting collection
 * @type {string}
 */
export const contractAddress = "0xB6BCdC8F6f40561AEc2ef0e765bAfFf4afA71283";

/**
 * array routes that are accessible to the public
 *
 * @type {string[]}
 */
export const publicRoutes = ["/", "/about", "/contact", "/faucet", "/register", "/login"];

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
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";

/**
 * The Contract Address for the 
 * @type {string}
 */
export const contractAddress = "";

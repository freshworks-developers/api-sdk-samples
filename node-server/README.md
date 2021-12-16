# Sample Node server using Freshteam API SDK

This app showcases using the Freshteam API SDK on a Node API server.

## Prerequisites

1. [Node.js](https://nodejs.org/en/download) installed.
1. Freshteam account. [Sign up](https://www.freshworks.com/hrms/signup) if you do not have an account.
2. Freshteam domain and API key added as FRESHTEAM_DOMAIN and FRESHTEAM_API_KEY in the environment variables respectively.

## Functionality

- The application exposes an API for employees and employee fields to make create, list, update, and get operations.
 - It uses the Freshworks API SDK in the underlying methods to make these HTTP requests to the configured Freshteam product.

## Steps to run server

1. Execute `npm install` to install the dependencies in the application directory.
2. Execute `npm run` to start the API server.
3. Use the APIs exposed to consume the API server endpoints. For example, use `http://<HOSTED_DOMAIN:HOSTED_PORT>/employees/list` to get the list of employees if running this API server locally.

## References

1. Freshworks API SDK - https://www.npmjs.com/package/@freshworks/api-sdk
2. Freshworks API SDK Documentation - https://developers.freshworks.com/api-sdk
3. Community to discuss and provide feedback - https://community.developers.freshworks.com

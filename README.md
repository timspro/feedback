# Feedback

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If the environment variable PORT is defined, it will use that port instead.
The server is hardcoded to run on port 8081.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### DANGEROUSLY_DISABLE_HOST_CHECK=true

webpack-dev-server (which is used by create-react-app) is exploitable since
it can serve arbitrary files on the host computer and when used with "proxy" in
package.json, can pass requests to arbitrary services running on the computer.

To help protect against these threats, the server checks a HOST header.
However, since my cloud development environment is a complicated network setup and it's unclear
what the host would be, I disable this check in package.json.

This is still secure because any request to the server has already been
authenticated with my Cloud9/AWS credentials. As a result, a malicious request
would have to be sent by my computer (or another authenticated session)
running code served by the server itself (i.e. impossible since that would mean
the server was already compromised). Another tab's (or iframe's)
request would be blocked by CORS.

This exploit generally requires that the host that webpack-dev-server is running
behind is publicly available or available behind a VPN. Since in our case each
request is sent by an authenticated browser session and since the browser won't
allow requests from other pages that could be open (CORS), we are safe.

More info:
https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
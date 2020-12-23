import Sockette from "sockette";
//Init WebSockets with Cognito Access Token
ws = new Sockette(
          "wss://APP_CLIENT_ID.execute-api.ap-southeast-2.amazonaws.com/dev?token=" +
            props.authData.signInUserSession.accessToken.jwtToken,
          {
            timeout: 5e3,
            maxAttempts: 1,
            onopen: e => console.log("connected:", e),
            onmessage: e => console.log("Message Received:", e),
            onreconnect: e => console.log("Reconnecting...", e),
            onmaximum: e => console.log("Stop Attempting!", e),
            onclose: e => console.log("Closed!", e),
            onerror: e => console.log("Error:", e)
          }
        );
//Send Message
ws.json({
      action: "sendMessage",
      data: "Hello World"
    });
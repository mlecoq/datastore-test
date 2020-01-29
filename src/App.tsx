import React, { useState } from "react";

import "./App.css";
import { Authenticator } from "aws-amplify-react";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import { Router } from "@reach/router";
import Project from "./pages/Project";
import { DataStore } from "@aws-amplify/datastore";

declare global {
  interface Window {
    LOG_LEVEL: any;
  }
}

window.LOG_LEVEL = "DEBUG";

DataStore.configure({
  errorHandler: error => {
    console.warn("Unrecoverable error", { error });
  },
  // maxRecordsToSync: 30000,
  fullSyncInterval: 1 //minutes
});

Amplify.configure(awsconfig);

const App: React.FC = () => {
  const [authState, setAuthState] = useState<string | null>(null);
  const signedIn = authState === "signedIn";

  if (signedIn) {
    return (
      <div className="App">
        <Router>
          <Project path="/" />
        </Router>
      </div>
    );
  }

  return (
    <Authenticator
      // Optionally hard-code an initial state
      authState="signIn"
      // Fired when Authentication State changes
      onStateChange={setAuthState}
      // Pass in an aws-exports configuration
      amplifyConfig={awsconfig}
      signUpConfig={{
        hiddenDefaults: ["phone_number", "email"]
      }}
    />
  );
};

export default App;

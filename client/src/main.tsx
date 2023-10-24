import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId, VITE_AUTH0_AUDIENCE: audience } = import.meta.env;
const redirectUri = window.location.origin + "/profile";

const currentHour = new Date().getHours();
const theme = currentHour >= 6 && currentHour < 18 ? "light" : "dark";
document.body.classList.add(theme)

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri, audience: audience }}>
      <App />
    </Auth0Provider>
  
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/modern-reset.css";
import "./styles/main.css";
import App from "./components/App.jsx";
import { ButtonGithub } from "./components/Buttons.jsx";
import { createPortal } from "react-dom";

function Root() {
  return (
    <>
      {createPortal(<ButtonGithub />, document.body)}
      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

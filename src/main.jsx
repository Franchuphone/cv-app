import { StrictMode, useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles/modern-reset.css";
import "./styles/main.css";
import App from "./components/App.jsx";
import { ButtonGithub } from "./components/Buttons.jsx";
import { createPortal } from "react-dom";

function Root() {
  const ref = useRef(null);
  const [showApp, setShowApp] = useState(false);
  const handleClick = () => {
    ref.current.classList.add("slideOut");
    setTimeout(() => setShowApp(true), 600);
  };

  return (
    <>
      {createPortal(<ButtonGithub />, document.body)}
      {!showApp ? (
        <div className="start" ref={ref}>
          <h1>Your personal CV builder</h1>
          <button id="button-start" onClick={handleClick}>
            Start
          </button>
        </div>
      ) : (
        showApp && <App />
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

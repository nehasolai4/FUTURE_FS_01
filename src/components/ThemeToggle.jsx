import { useState, useEffect } from "react";

function ThemeToggle() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setLightMode(true);
      document.body.classList.add("light-mode");
    }
  }, []);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <div
      className={`theme-toggle ${lightMode ? "active" : ""}`}
      onClick={() => setLightMode(!lightMode)}
    >
      <div className="toggle-circle"></div>
    </div>
  );
}

export default ThemeToggle;
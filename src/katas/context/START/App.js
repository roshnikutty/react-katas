import React, { useState } from "react";
import { themes } from "./theme";
import ThemedButton from "./themed-button";

// An intermediate component that uses the ThemedButton
const Toolbar = (props) => {
  return (
    <ThemedButton onClick={props.changeTheme} theme={props.theme}>
      Change Theme
    </ThemedButton>
  );
};

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  };

  return (
    <main className="main__wrapper">
      <Toolbar 
      changeTheme={toggleTheme}
       theme={theme} />
    </main>
  );
};

export default App
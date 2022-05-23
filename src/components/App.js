import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserContext, UserProvider } from "../context/user";
import user from "../data";

function App() {
  const [theme, setTheme] = useState("dark");

  console.log(user)
  return (
    <main className={theme}>
      <UserProvider>
      <Header theme={theme} setTheme={setTheme} />
      <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;

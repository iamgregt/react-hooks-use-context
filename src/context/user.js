import React from "react";

const UserContext = React.createContext()

function UserProvider({childen}) {
    const currentUser = {
        name: "Greg",
        interests: ["Coding", "Biking", "Basketball"]
    }

    return <UserContext.Provider value={currentUser}>{childen}</UserContext.Provider>
}

export {UserContext, UserProvider}
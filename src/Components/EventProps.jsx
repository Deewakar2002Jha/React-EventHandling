import React from "react";
import WelcomeUser from "./WelcomeUser";

export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`How can I help you ${user}`);
    };

    const handleHover = (user) => {
        alert(`Hey, thanks for hovering me ${user}`);
    };

    return (
        <WelcomeUser
            onClick={() => handleWelcomeUser("Deewakar Jha")}
            onMouseEnter={() => handleHover("Deewakar Jha")}
        />
    );
};


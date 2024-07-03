/* eslint-disable no-unused-vars */
import { useState } from "react";
import SongBox from "./components/Cards/SongBox/SongBox";
import SocialCard from "./components/Cards/SocialCards/SocialCard";

function App() {
    return (
        <div className="w-full h-auto bg-zinc-200">
            <SocialCard />
            <SongBox />
        </div>
    );
}

export default App;

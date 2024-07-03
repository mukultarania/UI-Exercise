import React, { useState } from "react";
import NavBar from "./NavBar";
import SongCard from "./SongCard";
import songs from "../../../data/data";

function SongBox() {
    const [data, setData] = useState(songs.songData);
    const handleCount = ( index ) => {
        setData((prevData) => {
            return prevData.map((song, i) => {
                if (i === index) {
                    return { ...song, added: !song.added };
                }
                return song;
            });
        });
    };

    return (
        <div className="w-full h-screen">
            <NavBar data={data} />
            <div className="flex flex-wrap gap-3">
                {data.map((item, index) => (
                    <SongCard
                        key={index}
                        index={index}
                        item={item}
                        handleCount={handleCount}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongBox;

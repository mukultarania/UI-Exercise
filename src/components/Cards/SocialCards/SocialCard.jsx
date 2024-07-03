/* eslint-disable no-unused-vars */
import { useState } from "react";
import SocialCards from "./SocialCards";
import social from "../../../data/data";

function SocialCard() {
    const [data, setData] = useState(social.socialdata);
    const handleClick = (index) => {
        setData((prevData) => {
            const newData = prevData.map((item, i) => {
                if (i === index) {
                    return { ...item, friend: !item.friend };
                }
                return item;
            });
            return newData;
        });
    };

    return (
        <div className="w-full h-screen bg-zinc-200 flex gap-4 items-center justify-center">
            {data.map((item, index) => (
                <SocialCards
                    key={index}
                    index={index}
                    item={item}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}

export default SocialCard;

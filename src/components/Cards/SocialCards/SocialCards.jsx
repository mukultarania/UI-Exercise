/* eslint-disable no-unused-vars */
import React from "react";

function SocialCards({ item, handleClick, index }) {
    return (
        <div className="w-52 bg-white rounded-md overflow-hidden shadow-md">
            <div className="w-full h-44 bg-sky-300">
                <img
                    className="w-full h-full object-cover object-top"
                    src={item.image}
                    alt={`${item.name}'s profile`}
                />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <h5 className="text-xs text-gray-500">{item.profession}</h5>
                <button
                    onClick={() => handleClick(index)}
                    className={`mt-4 px-3 py-1 text-xs ${
                        item.friend ? "bg-blue-400" : "bg-gray-400"
                    } text-white font-semibold rounded-md`}
                >
                    {item.friend ? "Friend" : "Add Friend"}
                </button>
            </div>
        </div>
    );
}

export default SocialCards;

import React from "react";

function SongCard({ item, index, handleCount }) {
    return (
        <div className="w-60 bg-zinc-50 p-4 rounded-md m-4 flex gap-2 relative">
            <div className="w-20 h-20 bg-orange-400 rounded-md">
                <img
                    className="w-full h-full object-cover overflow-hidden rounded-md"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div className="mb-12">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <h6 className="text-sm">{item.artist}</h6>
            </div>
            <button
                onClick={() => handleCount(index)}
                className={`absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] p-2 text-xs rounded-xl ${item.added ? "bg-sky-500" : "bg-orange-500"} text-white`}
            >
                {item.added ? "Added" : "Add to Fav"}
            </button>
        </div>
    );
}

export default SongCard;

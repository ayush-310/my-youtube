import React from 'react'
import ButtonComponent from './ButtonComponent'

const list = [
    "All",
    "Sports",
    "News",
    "Movies",
    "Documentaries",
    "Gaming",
    "Music",
    "Comedy",
    "Travel",
    "Technology",
    "Food",
    "Science",
    "Education",
    "Podcasts",
    "Fashion",
    "Motivation",
    "Nature",
    "History",
    "Business",
    "Anime",
    "Vlogs",
    "Live"
];

const ButtonList = () => {
    return (
        <div className=" overflow-auto  px-3  scrollbar-hide">
            <div className="flex">
                {list.map((item) => (
                    <ButtonComponent key={item} name={item} />
                ))}
            </div>
        </div>
    );
};

export default ButtonList;

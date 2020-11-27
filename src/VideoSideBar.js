import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";

function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSideBar">
      <div className="videoSideBar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__button">
        <ChatIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;

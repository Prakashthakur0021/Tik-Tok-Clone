import React, { useEffect, useState } from "react";
import "./App.css";
import db from "firebase";
import Video from "./Video";

function App() {
  //Firebase issue, otherwise app is running locally
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.child("videos").on("value", (snapshot) => {
      setVideos(snapshot.val().map((doc) => doc.data()));
    });
  }, [videos]);

  // db.collection("allLinks").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

// <Video
//           url="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Tik-Tok-8-MC.mp4?_=2"
//           channel="thakur21"
//           description="Hand Steps"
//           song="Alan - Surma"
//           likes={320}
//           messages={52}
//           shares={31}
//         />

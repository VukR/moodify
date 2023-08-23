import { useState } from "react";

import { MOODS, SONGS } from "./moodConfig";

import SubTitleText from "./components/text/SubTitleText";
import TitleText from "./components/text/TitleText";
import MoodsDisplay from "./components/mood/MoodsDisplay";
import Playlist from "./components/playlist/Playlist";

import Container from "@mui/material/Container";

function App() {
  const [moodSelection, setMoodSelection] = useState(null);
  const [songs, setSongs] = useState(SONGS);

  function handleMoodClick(mood) {
    moodSelection === mood ? setMoodSelection(null) : setMoodSelection(mood);
  }

  function deleteSong(index) {
    const tmpSongs = { ...songs };
    tmpSongs[moodSelection].splice(index, 1);
    setSongs(tmpSongs);
  }

  return (
    <div className="App">
      <Container>
        <TitleText />
        <SubTitleText />
        <MoodsDisplay
          handleMoodClick={handleMoodClick}
          moods={MOODS}
          moodSelection={moodSelection}
        />
        {moodSelection ? (
          <Playlist
            deleteSong={deleteSong}
            songs={songs[moodSelection]}
            moodSelection={moodSelection}
          />
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default App;

import { useState } from "react";

import { MOODS, SONGS } from "./moodConfig";

import SubTitleText from "./components/text/SubTitleText";
import TitleText from "./components/text/TitleText";
import MoodsDisplay from "./components/mood/MoodsDisplay";
import Playlist from "./components/playlist/Playlist";
import AddSongDialog from "./components/playlist/AddSongDialog";

import Container from "@mui/material/Container";

function App() {
  const [moodSelection, setMoodSelection] = useState(null);
  const [songs, setSongs] = useState(SONGS);
  const [dialog, setDialog] = useState(false);

  const handleDialogOpen = () => setDialog(true);
  const handleDialogClose = () => setDialog(false);

  function handleMoodClick(mood) {
    moodSelection === mood ? setMoodSelection(null) : setMoodSelection(mood);
  }

  function deleteSong(index) {
    const tmpSongs = { ...songs };
    tmpSongs[moodSelection].splice(index, 1);
    setSongs(tmpSongs);
  }

  function addSong(e) {
    const tmpSongs = { ...songs };
    const newSong = e.target.elements[0].value;
    const newArtist = e.target.elements[1].value;
    tmpSongs[moodSelection].push({ name: newSong, artist: newArtist });
    setSongs(tmpSongs);
    handleDialogClose();
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
          <>
            <Playlist
              deleteSong={deleteSong}
              addSong={addSong}
              handleDialogOpen={handleDialogOpen}
              songs={songs[moodSelection]}
              moodSelection={moodSelection}
            />
            <AddSongDialog
              dialog={dialog}
              handleDialogClose={handleDialogClose}
              addSong={addSong}
            />
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default App;

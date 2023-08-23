import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function AddSongDialog({ dialog, handleDialogClose, addSong }) {
  return (
    // e.preventDefault() - required. Prevent the default server-side submission behavior
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addSong(e);
      }}
    >
      {/* disablePortal - required. Sets the Dialog as part of the DOM */}
      <Dialog open={dialog} onClose={handleDialogClose} disablePortal>
        <DialogContent>
          <DialogContentText>
            Enter a song and artist - hit submit to add to the playlist
          </DialogContentText>
          <TextField
            required
            autoFocus
            id="name"
            label="Song Name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            id="artist"
            label="Artist Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default AddSongDialog;

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function SongItem({ deleteSong, name, artist, index }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton>
          <DeleteIcon onClick={() => deleteSong(index)} />
        </IconButton>
      }
      divider
    >
      <ListItemText primary={name} secondary={artist} />
    </ListItem>
  );
}

export default SongItem;

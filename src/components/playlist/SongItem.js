import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function SongItem({ name, artist }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton>
          <DeleteIcon />
        </IconButton>
      }
      divider
    >
      <ListItemText primary={name} secondary={artist} />
    </ListItem>
  );
}

export default SongItem;

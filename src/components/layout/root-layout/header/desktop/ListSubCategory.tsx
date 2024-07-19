import { List, ListItem, ListItemButton } from "@mui/material";

function ListSubCategory({ subCategoryItems }) {
  return (
    <List>
      {subCategoryItems.map((subCategory, index) => (
        <ListItem key={index}>
          <ListItemButton>{subCategory.text}</ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ListSubCategory;

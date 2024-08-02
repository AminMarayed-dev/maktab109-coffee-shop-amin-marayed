import { List, ListItem, ListItemButton } from "@mui/material";
import { useRouter } from "next/router";

function ListSubCategory({ subCategoryItems, slugCategory }) {
  const router = useRouter();
  return (
    <List sx={{ fontSize: "1rem" }}>
      {subCategoryItems.map((subCategory, index) => (
        <ListItem key={index}>
          <ListItemButton
            onClick={() => {
              router.push(
                `/product-category/${slugCategory}/${subCategory.slug}`
              );
            }}
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "8px",
              },
            }}
          >
            {subCategory.text}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ListSubCategory;

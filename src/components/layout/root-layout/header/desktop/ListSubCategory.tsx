import { List, ListItem, ListItemButton } from "@mui/material";
import { useRouter } from "next/router";

function ListSubCategory({ subCategoryItems, slugCategory }) {
  const router = useRouter();
  return (
    <List>
      {subCategoryItems.map((subCategory, index) => (
        <ListItem key={index}>
          <ListItemButton
            onClick={() => {
              router.push(
                `/product-category/${slugCategory}/${subCategory.slug}`
              );
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

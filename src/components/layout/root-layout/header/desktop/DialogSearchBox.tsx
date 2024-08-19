import useGetAllProductsToSearch from "@/hooks/home/useGetAllProductsToSearch";
import useHeaderStore from "@/zustand/root-layout/header/store";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useEffect, useState } from "react";
import AppBarSearchBox from "./AppBarSearchBox";
import ResultSearchBox from "./ResultSearchBox";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogSearchBox() {
  const { data, isLoading, isError } = useGetAllProductsToSearch();
  const [list, setList] = useState([]);
  const {
    handleCloseDialogSearchBox,
    openDialogSearchBox,
    searchValue,
    setSearchValue,
    debouncedSearchValue,
    setDebouncedSearchValue,
    setRecentSearchProducts,
    recentSearchProducts,
  } = useHeaderStore();

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);

    const filteredProducts = data?.products?.filter((product) =>
      product?.name.includes(debouncedSearchValue)
    );
    setList(filteredProducts);

    if (debouncedSearchValue) {
      setRecentSearchProducts(filteredProducts.slice(0, 4));
    }

    return () => {
      clearTimeout(handler);
    };
  }, [
    searchValue,
    debouncedSearchValue,
    data,
    setDebouncedSearchValue,
    setRecentSearchProducts,
  ]);

  return (
    <Dialog
      open={openDialogSearchBox}
      onClose={handleCloseDialogSearchBox}
      fullScreen
      TransitionComponent={Transition}
    >
      <AppBarSearchBox handleSearchValue={handleSearchValue} />
      <ResultSearchBox filteredProducts={list} />
    </Dialog>
  );
}

export default DialogSearchBox;

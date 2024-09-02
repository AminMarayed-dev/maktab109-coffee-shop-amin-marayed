import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

function ResultSearchBox({
  resultSearchProduct,
}: {
  resultSearchProduct: any;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/${resultSearchProduct?._id}`);
  };
  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {resultSearchProduct ? (
        <Stack direction="row" columnGap={2} alignItems="center">
          <Image
            // src={`http://${resultSearchProduct?.images[0]}`}
            src={resultSearchProduct?.images[0]}
            alt={resultSearchProduct.name}
            width={60}
            height={60}
          />
          <Typography>{resultSearchProduct?.name}</Typography>
        </Stack>
      ) : (
        <Typography color="error">محصولی یافت نشد</Typography>
      )}
    </div>
  );
}

export default ResultSearchBox;

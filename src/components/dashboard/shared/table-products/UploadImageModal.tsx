import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import { Button, Stack, styled } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const { dashboard } = localization;
function UploadImageModal() {
  const images = useDashboardStore((state) => state.images);
  const setImages = useDashboardStore((state) => state.setImages);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (images) setImages([file]);
    else setImages([...images, file]);
  };
  return (
    <Stack>
      <Button variant="contained" component="label">
        {dashboard.uploadPicture}
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      {/* <Box component={"img"} src={base64Image} sx={{ width: "60px" }}></Box>
      <Typography sx={{ wordBreak: "break-all" }}>
        {base64Image.slice(0, 30)}...
      </Typography> */}
    </Stack>
  );
}

export default UploadImageModal;

import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import { Button } from "@mui/material";

const { dashboard } = localization;
function UploadImageModal() {
  const { images, isUpload, setIsUpload, setImages, isEdit } =
    useDashboardStore();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (isEdit && !isUpload) {
      setIsUpload(true);
      setImages([file]);
    } else {
      setImages([...images, file]);
    }
  };
  return (
    <Button variant="contained" component="label">
      {dashboard.uploadPicture}
      <input type="file" hidden accept="image/*" onChange={handleFileChange} />
    </Button>
  );
}

export default UploadImageModal;

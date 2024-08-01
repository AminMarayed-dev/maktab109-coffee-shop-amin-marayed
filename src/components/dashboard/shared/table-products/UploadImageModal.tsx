import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import { Button } from "@mui/material";

const { dashboard } = localization;
const { center } = cssClass;
function UploadImageModal() {
  const images = useDashboardStore((state) => state.images);
  const isUpload = useDashboardStore((state) => state.isUpload);
  const setIsUpload = useDashboardStore((state) => state.setIsUpload);
  const setImages = useDashboardStore((state) => state.setImages);
  const isEdit = useDashboardStore((state) => state.isEdit);
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

import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import truncateText from "@/utils/trancateText";
import useDashboardStore from "@/zustand/dashboard/store";
import { Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

const { dashboard } = localization;

function ResultEditImage({ productImages }: { productImages: string[] }) {
  const isUpload = useDashboardStore((state) => state.isUpload);
  const imageUpload = useDashboardStore((state) => state.images);
  const removeImage = useDashboardStore((state) => state.removeImage);
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {imageUpload.length === 0 ? (
        <Typography variant="body2">{dashboard.noPicture}</Typography>
      ) : (
        <Typography variant="body2">
          {isUpload ? dashboard.newerPicture : dashboard.olderPicture}
        </Typography>
      )}

      {isUpload
        ? imageUpload.map((imageU, indexU) => (
            <Chip
              key={indexU}
              label={
                mdDown
                  ? truncateText(imageU.name, 4)
                  : truncateText(imageU.name, 8)
              }
              onDelete={() => removeImage(imageU.name)}
            />
          ))
        : productImages?.map((image, index) => (
            <Image
              key={index}
              src={`http://${image}`}
              width={mdDown ? 30 : 60}
              height={mdDown ? 30 : 60}
              alt="image"
            />
          ))}
    </Stack>
  );
}

export default ResultEditImage;

import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const { common } = localization;
function TextAreaModal() {
  const description = useDashboardStore((state) => state.description);
  const setDescription = useDashboardStore((state) => state.setDescription);
  return (
    <Box sx={{ width: "100%" }}>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={setDescription}
        placeholder={common.description}
      />
    </Box>
  );
}

export default TextAreaModal;

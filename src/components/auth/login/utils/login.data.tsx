import { localization } from "@/constant/localization";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
const { auth } = localization;
const textFieldItems = [
  {
    placeholder: auth.username,
    icon: <PersonIcon sx={{ fill: "black" }} />,
    name: "username",
    type: "text",
  },
  {
    placeholder: auth.password,
    icon: <LockIcon sx={{ fill: "black" }} />,
    name: "password",
    type: "password",
  },
];

export default textFieldItems;

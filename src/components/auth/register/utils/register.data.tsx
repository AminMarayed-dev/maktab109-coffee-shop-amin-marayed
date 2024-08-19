import { localization } from "@/constant/localization";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
const { auth } = localization;
const textFieldItems = [
  {
    placeholder: auth.username,
    icon: <EmailIcon sx={{ fill: "black" }} />,
    name: "username",
    type: "text",
  },
  {
    placeholder: auth.password,
    icon: <LockIcon sx={{ fill: "black" }} />,
    name: "password",
    type: "password",
  },
  {
    placeholder: auth.firstname,
    icon: <PersonIcon sx={{ fill: "black" }} />,
    name: "firstname",
    type: "text",
  },
  {
    placeholder: auth.lastname,
    icon: <PersonIcon sx={{ fill: "black" }} />,
    name: "lastname",
    type: "text",
  },
  {
    placeholder: auth.address,
    icon: <LocationOnIcon sx={{ fill: "black" }} />,
    name: "address",
    type: "text",
  },
  {
    placeholder: auth.phoneNumber,
    icon: <StayCurrentPortraitIcon sx={{ fill: "black" }} />,
    name: "phoneNumber",
    type: "text",
  },
];

export default textFieldItems;

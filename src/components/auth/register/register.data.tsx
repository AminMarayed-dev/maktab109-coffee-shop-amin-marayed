import { localization } from "@/constant/localization";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
const { auth } = localization;
const textFieldItems = [
  {
    placeholder: auth.username,
    icon: <EmailIcon />,
    name: "username",
    type: "text",
  },
  {
    placeholder: auth.password,
    icon: <LockIcon />,
    name: "password",
    type: "password",
  },
  {
    placeholder: auth.firstname,
    icon: <LockIcon />,
    name: "firstname",
    type: "text",
  },
  {
    placeholder: auth.lastname,
    icon: <PersonIcon />,
    name: "lastname",
    type: "text",
  },
  {
    placeholder: auth.address,
    icon: <PersonIcon />,
    name: "address",
    type: "text",
  },
  {
    placeholder: auth.phoneNumber,
    icon: <StayCurrentPortraitIcon />,
    name: "phoneNumber",
    type: "text",
  },
];

export default textFieldItems;

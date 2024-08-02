import { localization } from "@/constant/localization";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardContent, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const { home } = localization;
function DescriptionAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Stack mt={4} rowGap={2.5}>
      <Card sx={{ padding: 2, boxShadow: 4 }}>
        <CardContent>
          <Typography
            variant="h4"
            mb={3}
            textAlign="center"
            color="secondary.dark"
          >
            {home.buyCoffee}
          </Typography>
          <Typography>{home.desBuyCoffee}</Typography>
        </CardContent>
      </Card>
      <Accordion expanded={expanded} onChange={handleExpansion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{home.buyOnlineCoffee}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary.light">
            {home.desBuyOnlineCoffee}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{home.shopCoffeeMarayed}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary.light">
            {home.desShopCoffeeMarayed}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h5">{home.freeSend}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary.light">{home.desFreeSen}</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default DescriptionAccordion;

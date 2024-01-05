import { Box, useTheme } from "@mui/material";
import Header from "./Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";


const AboutUsPage= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="About us"/> 
      <h3><Header title="Revolutionizing Relationships, Enhancing Productivity"/></h3>



      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
          Welcome to Our Website , where we redefine the dynamics of relationship management through our innovative CRM solutions. Our mission is to empower businesses with tools that foster meaningful connections, streamline operations, and drive growth in today's dynamic marketplace.

At [Your Company Name], we understand the pivotal role relationships play in the success of any business. Our state-of-the-art CRM platform is meticulously crafted to cater to diverse industry needs, revolutionizing the way organizations engage with their customers, partners, and stakeholders.

What sets us apart is our unwavering commitment to innovation and customer-centricity. Our team of experts continuously refines our CRM technology to stay ahead in a rapidly evolving landscape. We strive to offer intuitive, scalable, and customizable solutions that adapt seamlessly to your unique business requirements.

Our platform isn’t just about managing contacts; it's a comprehensive ecosystem designed to optimize workflows, analyze data intelligently, and empower your team to make informed decisions. With robust features such as detailed analytics, automation, and personalized engagement tools, we ensure that you have the necessary resources to thrive in a competitive environment.

Moreover, we take pride in our unwavering dedication to customer success. Our support team is readily available to guide you through implementation, provide training, and offer ongoing assistance, ensuring a smooth and fruitful experience with our CRM platform.

Join us on this journey of innovation and transformation. Together, let’s build stronger relationships, drive operational efficiency, and unlock the full potential of your business.

Discover the power of [Your Company Name] CRM - where connections flourish, productivity soars, and success becomes a tangible reality.
          </Typography>
        </AccordionSummary>
        
      </Accordion>
      
    </Box>
  );
};

export default AboutUsPage;
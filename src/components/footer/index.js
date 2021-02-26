import { Container, NetWorks } from "./style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <Container>
      <NetWorks href="https://www.linkedin.com/in/nfilipen/" target="blank">
        <LinkedInIcon /> linkedin
      </NetWorks>
      <p>@FN-Nativa</p>
      <NetWorks href="https://github.com/FilipeNatividade" target="blank">
        <GitHubIcon /> GitHub
      </NetWorks>
    </Container>
  );
};
export default Footer;

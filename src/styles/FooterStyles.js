import sizes from "../styles/sizes";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    padding: "6rem",
    marginBottom: "3rem",
    [sizes.down("sm")]: {
      padding: "2rem",
    },
  },
  icons: {
    margin: "1rem",
    marginBottom: "2rem",
    transform: "scale(0.9)",
    transition: "300ms cubic-bezier(0, 0.8, 0.13, 1)",
    "&:hover": {
      transform: "scale(1)",
      transition: "300ms cubic-bezier(0, 0.8, 0.13, 1)",
    },
  },
}));

export default useStyles;

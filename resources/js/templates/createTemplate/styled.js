import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    '@media(max-width:599px)':{
      display:'flex',
      flexDirection:'column-reverse'
    }
  }
}));





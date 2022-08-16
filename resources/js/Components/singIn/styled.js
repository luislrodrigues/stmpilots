import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
     height:'100vh',
    '@media(max-width:960px)':{
      backgroundImage: "url(https://i.ibb.co/3NB8s3N/portada.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    '@media(max-width:400px)':{
        backgroundImage: "url(https://i.ibb.co/mSwYcRM/portada-Mobile.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  },
  gridFondo:{
    backgroundImage: "url(https://i.ibb.co/3NB8s3N/portada.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  }
}));

export const theme = createTheme({
    breakpoints: {
      values: {
        x: 300,
        xs:460,
        ssm:550,
        sm: 780,
        md: 960,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
    },

  });

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./styled";
import { useSingIn } from "./useSingIn";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";

export default function SignInSide() {
    const classes = useStyles();
    const { login, handleClose, open, loading } = useSingIn();
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{ height: "100vh" }}
                className={classes.root}
            >
                <CssBaseline />
                <Grid item sm={false} md={7} className={classes.gridFondo} />
                <Grid
                    item
                    xxs={11}
                    xs={8}
                    ssm={6}
                    sm={5}
                    md={5}
                    component={Paper}
                    elevation={6}
                >
                    <Box
                        sx={{
                            mt: 6,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box component="div" sx={{ mb: 5 }}>
                            <img
                                src="/images/logo-STM.png"
                                height={110}
                                alt=""
                            />
                        </Box>
                        <Box component="form" onSubmit={login} sx={{ mb: 2 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                label="Usuario"
                                name="username"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                name="password"
                                label="Password"
                                type="password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2, background: "#01448B" }}
                            >
                                Iniciar Session
                            </Button>
                        </Box>
                        <Snackbar
                            open={open}
                            autoHideDuration={3000}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                        >
                            <Alert
                                onClose={handleClose}
                                severity="error"
                                sx={{ width: "100%" }}
                            >
                                Usuario o Contraseña incorrecta
                            </Alert>
                        </Snackbar>
                    </Box>
                </Grid>
                {loading && (
                    <Box
                        sx={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            marginTop: "-25px",
                            marginLeft: "-25px",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
            </Grid>
        </ThemeProvider>
    );
}

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function Create({createTitle,create,searchLabel,createValue,handleChangeCreate}) {
    return (
        <Grid item xs={12} sm={6} md={5}>
            <Typography
                sx={{ mb: 2, fontWeight: "bold", fontSize: "18px" }}
                variant="h6"
                component="div"
            >
                {createTitle}
            </Typography>
            <Box
                component="form"
                onSubmit={create}
                sx={{
                    background: "#fff",
                    width: "100%",
                    boxSizing: "borderBox",
                    px: 2,
                    py: 3,
                }}
            >
                <Box component="div">
                    <TextField
                        autoComplete="off"
                        id="create"
                        label={searchLabel}
                        name="create"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        value={createValue}
                        onChange={handleChangeCreate}
                    />
                </Box>
                <Box
                    component="div"
                    sx={{ display: "flex", justifyContent: "end" }}
                >
                    <Button
                        type="submit"
                        sx={{ marginTop: 2 }}
                        variant="contained"
                        onClick={create}
                        disabled={createValue ? false : true}
                    >
                        CREAR
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

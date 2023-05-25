import { Box, Grid } from "@mui/material";
import { Assist } from "./Assist";
import { Form } from "./Form";

export const MainPage = () => {
    return (
        <div>
            <h1>MainPage</h1>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={5} style={{"background": "#fff7d4", height: "500px"}}>
                    <Assist />
                </Grid>
                <Grid item xs={7} style={{"background": "#d4f4ff", height: "500px"}}>
                    <Form />
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};
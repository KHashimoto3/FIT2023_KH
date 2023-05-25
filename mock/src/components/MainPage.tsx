import { Grid } from "@mui/material";
import { Assist } from "./Assist";
import { Form } from "./Form";

export const MainPage = () => {
    return (
        <div>
            <h1>MainPage</h1>
            <Grid container spacing={2}>
                <Grid item xs={5} style={{"background": "#fff7d4"}}>
                    <Assist />
                </Grid>
                <Grid item xs={7} style={{"background": "#d4f4ff"}}>
                    <Form />
                </Grid>
            </Grid>
        </div>
    )
};
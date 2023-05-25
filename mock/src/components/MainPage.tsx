import { Box, Grid } from "@mui/material";
import { Assist } from "./Assist";
import { Form } from "./Form";

interface HintList {
    hint: string;
    explanation: string;
}

export const MainPage = () => {
    const hintList: HintList[] = [
        {
            "hint": "forの書き方がわからない",
            "explanation": "説明１"
        },
        {
            "hint": "どのような値を設定すればよいのかわからない（問題理解）",
            "explanation": "説明2"
        },
    ];

    return (
        <div>
            <h1>MainPage</h1>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Assist hintList={hintList} />
                </Grid>
                <Grid item xs={7}>
                    <Form />
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};
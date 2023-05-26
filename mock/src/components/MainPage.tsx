import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Assist } from "./Assist";
import { Form } from "./Form";

interface FormData {
    hintList: HintList[];
}

interface HintList {
    hint: string;
    explanation: string;
}

export const MainPage = () => {
    const [formDataIndex, setFormDataIndex] = useState<number>(0);

    const changeFormDataIndex = (index: number) => {
        setFormDataIndex(index);
    };

    const formData: FormData[] = [
        {
            "hintList": [
                {
                    "hint": "forの書き方がわからない",
                    "explanation": "説明１"
                },
                {
                    "hint": "どのような値を設定すればよいのかわからない（問題理解）",
                    "explanation": "説明2"
                },
            ]
        },
        {
            "hintList": [
                {
                    "hint": "関数の宣言の仕方がわからない",
                    "explanation": "説明１"
                },
                {
                    "hint": "どのような値を設定すればよいのかわからない（問題理解）",
                    "explanation": "説明2"
                },
            ]
        },
    ];

    return (
        <div>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Assist hintList={formData[formDataIndex].hintList} />
                </Grid>
                <Grid item xs={7}>
                    <Form changeFormDataIndex={changeFormDataIndex} />
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};
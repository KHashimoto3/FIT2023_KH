import { useState } from "react";
import { Container, Typography } from "@mui/material";

export const Form = () => {
    const [formValue, setFormValue] = useState<string>("");
    return (
        <Container maxWidth="md">
            <Typography variant="h4">フォーム</Typography>
            <input type="text" size={20} onChange={(event) => setFormValue(event.target.value)} /><br />
            <p>入力した値：{formValue}</p>
        </Container>
    )
};
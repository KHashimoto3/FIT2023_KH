import { useState } from "react";
import { Container } from "@mui/material";

export const Form = () => {
    const [formValue, setFormValue] = useState<string>("");
    return (
        <Container maxWidth="md">
            <h1>フォーム</h1>
            <input type="text" size={20} onChange={(event) => setFormValue(event.target.value)} /><br />
            <p>入力した値：{formValue}</p>
        </Container>
    )
};
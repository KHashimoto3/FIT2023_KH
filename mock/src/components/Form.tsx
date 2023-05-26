import { useState } from "react";
import { Container, Typography } from "@mui/material";

type Props = {
    changeFormDataIndex: (index: number) => void;
};

export const Form = (props: Props) => {
    const [formValue, setFormValue] = useState<string>("");
    const [formValue2, setFormValue2] = useState<string>("");

    const changeFormDataIndex = props.changeFormDataIndex;

    return (
        <Container maxWidth="md">
            <Typography variant="h4">フォーム</Typography>
            <input type="text" size={20} onChange={(event) => setFormValue(event.target.value)} onFocus={() => changeFormDataIndex(0)} /><br />
            <input type="text" size={20} onChange={(event) => setFormValue2(event.target.value)} onFocus={() => changeFormDataIndex(1)} /><br />

            <Typography variant="h5">入力値_上：{formValue}</Typography>
            <Typography variant="h5">入力値_下：{formValue2}</Typography>
        </Container>
    )
};
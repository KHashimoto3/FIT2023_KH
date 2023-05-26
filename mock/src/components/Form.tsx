import { useState } from "react";
import { Container, Typography } from "@mui/material";

type Props = {
    changeFormDataIndex: (index: number) => void;
};

export const Form = (props: Props) => {
    const [formValue, setFormValue] = useState<string>("");
    const [formValue2, setFormValue2] = useState<string>("");

    //MainPageから渡された、ヒントのリストのインデックスを変更する関数
    const changeFormDataIndex = props.changeFormDataIndex;

    return (
        <Container maxWidth="md">
            <Typography variant="h4">フォーム</Typography>
            <input type="text" size={20} onChange={(event) => setFormValue(event.target.value)} onFocus={() => changeFormDataIndex(0)} /><br />
            <input type="text" size={20} onChange={(event) => setFormValue2(event.target.value)} onFocus={() => changeFormDataIndex(1)} /><br />

            <pre>
                <textarea cols={50} rows={2}/><br />
                int main(void){'{\n'}
                {'\t'}<textarea cols={50} rows={2}/><br />
                {'\t'}//入力値を受け取る{'\n'}
                {'\t'}for {'('}<input type="text" size={20} />{') {\n'}
                {'\t'}{'\t'}<textarea cols={50} rows={2}/><br />
            </pre>
        </Container>
    )
};
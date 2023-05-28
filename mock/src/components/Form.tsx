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

            <pre>
                <textarea cols={50} rows={2} onFocus={() => changeFormDataIndex(0)} /><br />
                int main(void){'{\n'}
                {'\t'}<textarea cols={50} rows={2} onFocus={() => changeFormDataIndex(1)} /><br />
                {'\t'}//入力値を受け取る{'\n'}
                {'\t'}for {'('}<input type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{'; '}<input type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{'; '}<input type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{') {\n'}
                {'\t'}{'\t'}<textarea cols={50} rows={2} onFocus={() => changeFormDataIndex(3)} /><br />
            </pre>
        </Container>
    )
};
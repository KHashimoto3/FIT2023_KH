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

    const commentStyle = {
        color: "#39b359",
        fontSize: "16pt"
    }

    const preStyle = {
        fontSize: "16pt"
    }

    const inputStyle = {
        fontSize: "16pt"
    }

    const textAreaStyle = {
        fontSize: "16pt"
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h4">フォーム</Typography>

            <pre style={preStyle}>
                <pre style={commentStyle}>/**</pre>
                <textarea style={commentStyle} cols={40} rows={2} /><br />
                <pre style={commentStyle}>*/</pre>
                <textarea style={textAreaStyle} cols={40} rows={2} onFocus={() => changeFormDataIndex(0)} /><br />
                int main(void){'{\n'}
                {'\t'}<textarea style={textAreaStyle} cols={40} rows={2} onFocus={() => changeFormDataIndex(1)} /><br />
                {'\t'}//入力値を受け取る{'\n'}
                {'\t'}for {'('}<input style={inputStyle} type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{'; '}<input style={inputStyle} type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{'; '}<input style={inputStyle} type="text" size={5} onFocus={() => changeFormDataIndex(2)} />{') {\n'}
                {'\t'}{'\t'}<textarea style={textAreaStyle} cols={40} rows={2} onFocus={() => changeFormDataIndex(3)} /><br />
                {'\t'}{'}'}<br />
                {'\t'}return 0;<br />
                {'}'}
            </pre>
        </Container>
    )
};
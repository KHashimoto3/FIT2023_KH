import { Container } from "@mui/material";

type Props = {
    hintList: HintList[];
}

interface HintList {
    hint: string;
    explanation: string;
}

export const Assist = (props: Props) => {
    //ヒントのリスト（MainPageから渡された）
    const hintList: HintList[] = props.hintList;
    
    return (
        <Container maxWidth="md">
            <h1>Assist</h1>
            {hintList.map((hint, index) => {
                return (
                    <p>ヒント{index + 1}: {hint.hint}</p>
                )
            })
            }
        </Container>
    )
};
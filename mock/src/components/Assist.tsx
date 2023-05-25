import { useState } from "react";
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

    const [hintIndex, setHintIndex] = useState<number>(0);

    return (
        <Container maxWidth="md">
            <h1>Assist</h1>
            {hintList.map((hint, index) => {
                return (
                    <>
                    ヒント{index + 1}: {hint.hint}<button onClick={() => setHintIndex(index)}>ヒントを見る</button><br />
                    </>
                )
            })
            }
            <h2>説明：{hintList[hintIndex].explanation}</h2>
        </Container>
    )
};
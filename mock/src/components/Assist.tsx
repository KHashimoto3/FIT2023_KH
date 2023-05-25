import { useState } from "react";
import { Button, Card, Container, Stack, Typography } from "@mui/material";

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
            <Stack spacing={2}>
            {hintList.map((hint, index) => {
                return (
                    <Card key={index} style={{padding: "10px"}}>
                        <Typography variant="h6" style={{color: "#0288d1"}}>ヒント{index + 1}</Typography>
                        <Typography variant="h5">{hint.hint}</Typography>
                        <Button size="small"  onClick={() => setHintIndex(index)}>ヒントを見る</Button>
                    </Card>
                )
            })
            }
            </Stack>
            <h2>説明：{hintList[hintIndex].explanation}</h2>
        </Container>
    )
};
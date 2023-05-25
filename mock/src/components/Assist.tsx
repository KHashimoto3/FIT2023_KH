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
            <Typography variant="h4">ヒント</Typography>
            <Container maxWidth="md">
                <Stack spacing={2}>
                    {hintList.map((hint, index) => {
                        return (
                            <Card key={index} style={{padding: "10px"}} sx={{ maxWidth: "300px"}}>
                                <Typography variant="h6" style={{color: "#0288d1"}}>ヒント{index + 1}</Typography>
                                <Typography variant="h5">{hint.hint}</Typography>
                                <Button size="small"  onClick={() => setHintIndex(index)}>ヒントを見る</Button>
                             </Card>
                        )
                    })
                }
                 </Stack>
            </Container>
            <Typography variant="h4">説明：</Typography>
            <Typography variant="h5">{hintList[hintIndex].explanation}</Typography>
        </Container>
    )
};
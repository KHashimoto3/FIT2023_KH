import { useState } from "react";
import { Button, Card, Container, Stack, Typography } from "@mui/material";

type Props = {
    stepNo: number;
    stepName: string;
    hintList: HintList[];
}

interface HintList {
    hint: string;
    explanation: string;
}

export const Assist = (props: Props) => {
    //ヒントのリスト（MainPageから渡された）
    const hintList: HintList[] = props.hintList;
    const stepNo: number = props.stepNo;
    const stepName: string = props.stepName;

    const [hintIndex, setHintIndex] = useState<number>(0);

    const [explainIsShow, setExplainIsShow] = useState<boolean>(false);

    const showExplain = (index: number) => {
        setHintIndex(index);
        setExplainIsShow(true);
    }

    if (!explainIsShow) {
        return (
            <Container maxWidth="md">
                <Typography variant="h4">STEP{stepNo}: {stepName}</Typography>
                <Container maxWidth="md" sx={{marginBottom: "30px"}}>
                    <Stack spacing={2} sx={{marginBottom: "30px"}}>
                        {hintList.map((hint, index) => {
                            return (
                                <Card key={index} style={{padding: "10px"}} sx={{ maxWidth: "500px"}}>
                                    <Typography variant="h6" style={{color: "#0288d1"}}>つまずき{index + 1}</Typography>
                                    <Typography variant="h5">{hint.hint}</Typography>
                                    <Button size="small"  onClick={() => showExplain(index)}>ヒントを見る</Button>
                                 </Card>
                            )
                        })
                    }
                     </Stack>
                    <hr />
                    <Stack spacing={2}>
                        <Button size="small" variant="contained">知りたい情報はこの中にない</Button>
                        <Button size="small" variant="contained">今はつまずいていない</Button>
                    </Stack>
                </Container>
            </Container>
        )
    } else {
        return (
            <Container maxWidth="md">
                <Typography variant="h4">ヒント</Typography>
                <Button size="small" variant="contained" onClick={() => setExplainIsShow(false)}>戻る</Button>
                <Typography variant="h5">説明：{hintList[hintIndex].explanation}</Typography>
            </Container>
        )
    }
};
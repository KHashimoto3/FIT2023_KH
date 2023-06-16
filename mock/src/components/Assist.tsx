import { Button, Container, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

        return (
            <Container maxWidth="md">
                <Typography variant="h4">STEP{stepNo}: {stepName}</Typography>
                <Container maxWidth="md" sx={{marginBottom: "30px"}}>
                     <div>
                        {hintList.map((hint, index) => {
                            return (
                                <Accordion key={hint.hint}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{backgroundColor: "#e3f4ff"}}
                                    >
                                        <Typography variant="h5">つまずき{index + 1}：{hint.hint}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="h6">
                                            for文の書き方
                                        </Typography>
                                        <textarea style={{fontSize: "14pt"}} cols={30} rows={3}>{hint.explanation}</textarea><br />
                                        <Typography variant="body1">
                                        初期化式：ループ変数や制御変数の初期値を設定します。通常、カウンタ変数を初期化するために使用されます。<br />
条件式：ループの継続条件を指定します。条件が真である限りループが続行されます。ループが始まる前に条件式が評価され、条件が偽である場合はループは実行されません。<br />
更新式：ループ変数や制御変数の更新を行います。通常、カウンタ変数を増加または減少させるために使用されます。
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                     </div>
                    <hr />
                    <Stack spacing={2}>
                        <Button size="small" variant="contained">知りたい情報はこの中にない</Button>
                        <Button size="small" variant="contained">今はつまずいていない</Button>
                    </Stack>
                </Container>
            </Container>
        )
};
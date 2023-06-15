import { useState } from "react";
import { Button, Card, Container, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
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

    const [hintIndex, setHintIndex] = useState<number>(0);

        return (
            <Container maxWidth="md">
                <Typography variant="h4">STEP{stepNo}: {stepName}</Typography>
                <Container maxWidth="md" sx={{marginBottom: "30px"}}>
                     <div>
                        {hintList.map((hint, index) => {
                            return (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{hint.hint}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {hint.explanation}
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
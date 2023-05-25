import { Container } from "@mui/material";

export const Assist = () => {

    const hintList = [
        {
            "hint": "ヒント１",
            "explanation": "説明１"
        },
        {
            "hint": "ヒント２",
            "explanation": "説明２"
        },
        {
            "hint": "ヒント３",
            "explanation": "説明３"
        }
    ];

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
import { Container } from "@mui/material";

export const Assist = () => {

    const hintList = [
        {
            "hint": "ヒント１"
        },
        {
            "hint": "ヒント２"
        },
        {
            "hint": "ヒント３"
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
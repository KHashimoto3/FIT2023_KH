import { Container } from "@mui/material";

export const Assist = () => {

    const hintList = [
        {
            "hint": "forの書き方がわからない",
            "explanation": "説明１"
        },
        {
            "hint": "どのような値を設定すればよいのかわからない（問題理解）",
            "explanation": "説明２"
        },
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
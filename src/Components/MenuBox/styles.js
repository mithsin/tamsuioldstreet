import { createUseStyles } from 'react-jss'

export const MenuBoxStyle = createUseStyles({
    MenuBoxWrappe: { display: "flex", flexDirection: "column" },
    MenuBoxTitle: {
        display: "flex",
        padding: "16px 0",
        alignContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #818181",
        marginBottom: "16px",
        "& h1": {
            flex: "1 1 30%",
            padding: "0",
            margin: "0",
            fontSize: "2rem",
            fontWeight: 600
        },
        "& p": {
            flex: "1 1 70%",
            padding: "0 0 0 26px",
            margin: "0",
            fontSize: "1rem",
            textAlign: "left"
        }
    },
    MenuBoxItemWrapper: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr));",
        gridGap: "1rem"
    },
});

        
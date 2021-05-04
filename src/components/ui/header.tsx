import React from "react";
import * as Mui from "./mui";

interface HeaderProps {
    welcomeText?: string;
    author?: string;
}
const useStyles = Mui.makeStyles((theme) => ({
    header: {
        width: "100%",
        borderBottom: "1px solid #ccc"
    },

}));

const Header = (props: HeaderProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <h1>{props.welcomeText}</h1>
        </div>
    );
}

export default Header;
import React from "react";
import * as Mui from "./mui";
import Game from './animatedBkg/bkg';
interface HeaderProps {
    welcomeText?: string;
    author?: string;
}
const useStyles = Mui.makeStyles((theme) => ({
    header: {

        width: '100%',
        // borderBottom: '1px solid #ccc',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

}));

const Header = (props: HeaderProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Game />
        </div>
    );
}

export default Header;
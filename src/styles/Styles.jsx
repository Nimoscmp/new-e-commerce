import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    /*::::::::::::::::::::: 
    ::: General styles  :::
    :::::::::::::::::::::::*/

    marginOne: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },

    /*::::::::::::::::::::: 
    ::::  Form styles  ::::
    :::::::::::::::::::::::*/

    //  Form general
    flexColumn: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '80%',
        padding: theme.spacing(1)
    },

    //  Input text
    //  Button
    inputBlue: {
        // color: '#ffd166 !important',
        // transition: 'all 0.3s easeInOut',
        // '&:hover': {
        //     color: '#0062e3'
        // }
    },

    //  Button
    buttonGreen: {
        // backgroundColor: '#3d5a80',
        // color: 'white',
        // transition: 'all 0.3s easeInOut',
        // '&:hover': {
        //     backgroundColor: '#0062e3'
        // }
    }
}));

export default useStyles;
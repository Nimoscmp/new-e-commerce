import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    /*::::::::::::::::::::: 
    ::: General styles  :::
    :::::::::::::::::::::::*/

    marginOne: {
        marginTop: '0.5rem !important',
        marginBottom: '0.5rem !important'
    },

    /*::::::::::::::::::::: 
    ::::  Banner styles  ::::
    :::::::::::::::::::::::*/



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

    //  Icons
    iconBlue: {
        color: '#002884',
        transition: 'all 0.3s ease-out'
    },
    iconGray: {
        color: '#6e6e6e',
        transition: 'all 0.3s ease-out'
    }
}));

export default useStyles;
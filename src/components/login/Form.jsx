import { Button, Grid } from "@material-ui/core";
import useStyles from "../../styles/Styles";
import InputPassword from "./form/InputPassword";
import InputText from "./form/InputText";

const Form = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container item xs={12} md={6} justify="center">
                <form className={classes.flexColumn}>
                    <InputText xs={12}/>
                    <InputPassword xs={12}/>
                    <Button
                        xs={12} 
                        variant="contained"
                        type="submit"
                        disabled={false}
                        color="primary"
                        className={classes.buttonGreen}>
                        <span className="spanButton">Iniciar sesión</span>
                    </Button>
                </form>  
            </Grid>
        </>
    )
}

export default Form;

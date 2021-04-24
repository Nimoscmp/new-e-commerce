import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { AccountCircleOutlined } from '@material-ui/icons';
import useStyles from "../../../styles/Styles";

const InputText = () => {

    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.marginOne} variant="outlined" color="primary">
                <InputLabel htmlFor="username" className="capitalize">Usuario</InputLabel>
                <OutlinedInput
                    id="username"
                    name="username"
                    type="text"
                    labelWidth={60}
                    className={classes.inputBlue}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        
                        <AccountCircleOutlined className="classcircle"/>
                        
                    </InputAdornment>
                    }
                />
                
                <FormHelperText id="outlined-weight-helper-text" className="errorText">No es válido</FormHelperText>
                
            </FormControl>
        </>
    )
}

export default InputText;

import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { VisibilityOff } from "@material-ui/icons";
import useStyles from "../../../styles/Styles";

const InputPassword = () => {

    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.marginOne} variant="outlined" color="primary">
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type="password"
                    labelWidth={90}
                    // onFocus={() => setInputFocus({...inputFocus, _password: true})}
                    // onBlur={() => setInputFocus({...inputFocus, _password: false})}
                    // onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleShowPassword}
                        edge="end"
                        >
                        
                            <VisibilityOff className="visibility"/>
                            
                        </IconButton>
                    </InputAdornment>
                    }
                />
                
                <FormHelperText id="outlined-weight-helper-text" className="errorText">La contraseña no es válida</FormHelperText>
                
            </FormControl>
        </>
    )
}

export default InputPassword;

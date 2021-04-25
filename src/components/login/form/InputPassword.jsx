import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { hide_password_action, input_blur_action, password_focus_action, show_password_action } from "../../../redux/mainDucks";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../../../styles/Styles";

const InputPassword = () => {

    const classes = useStyles();

    const { password : passwordFocus } = useSelector(state => state.style);
    const showPassword = useSelector(state => state.password);

    const dispatch = useDispatch();

    const handleShowPassword = () => {
        if (showPassword) {
            dispatch(hide_password_action());
        } else {
            dispatch(show_password_action());
        }
    }

    return (
        <>
            <FormControl className={classes.marginOne} variant="outlined" color="primary">
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    labelWidth={90}
                    onFocus={() => dispatch(password_focus_action())}
                    onBlur={() => dispatch(input_blur_action())}
                    // onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                        >
                        {showPassword ?
                        <VisibilityOff className={passwordFocus ? classes.iconBlue : classes.iconGray}/>
                        :
                        <Visibility className={passwordFocus ? classes.iconBlue : classes.iconGray}/>
                        }
                            
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

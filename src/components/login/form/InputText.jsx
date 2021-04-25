import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { AccountCircleOutlined } from '@material-ui/icons';
import useStyles from "../../../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { input_blur_action, username_focus_action } from "../../../redux/mainDucks";

const InputText = () => {

    const classes = useStyles();

    const { username : usernameFocus } = useSelector(state => state.style);

    const dispatch = useDispatch();

    return (
        <>
            <FormControl className={classes.marginOne} variant="outlined" color="primary">
                <InputLabel htmlFor="username" className="capitalize">Usuario</InputLabel>
                <OutlinedInput
                    id="username"
                    name="username"
                    type="text"
                    labelWidth={60}
                    onFocus={() => dispatch(username_focus_action())}
                    onBlur={() => dispatch(input_blur_action())}
                    // onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        
                        <AccountCircleOutlined className={usernameFocus ? classes.iconBlue : classes.iconGray}/>
                        
                    </InputAdornment>
                    }
                />
                
                <FormHelperText id="outlined-weight-helper-text" className="errorText">No es válido</FormHelperText>
                
            </FormControl>
        </>
    )
}

export default InputText;

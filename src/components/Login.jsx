import { Grid } from "@material-ui/core"
import Banner from "./login/Banner"
import Form from "./login/Form"

const Login = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Banner />
                <Form />
            </Grid>
        </>
    )
}

export default Login;

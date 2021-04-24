import { Grid } from "@material-ui/core"
import Banner from "./login/Banner"
import Main from "./login/Main"

const Login = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Banner />
                <Main />
            </Grid>
        </>
    )
}

export default Login

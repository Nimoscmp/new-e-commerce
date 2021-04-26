import { Grid } from '@material-ui/core'
import useStyles from '../../styles/Styles'

const Banner = () => {

    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} md={6} className={classes.dFlexCenter}>
                <section className={classes.w80}>
                    <h3 className={classes.fw300}>En <strong className={classes.blue}>Sannotonni</strong> puedes encontrar la ropa que más se ajusta a ti</h3>
                    <p><strong>Inicia sesión para ver nuestras ofertas</strong></p>
                </section>  
            </Grid>
        </>
    )
}

export default Banner

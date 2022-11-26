import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { Gcard } from "../../components/my card/Gcard/Gcard"


export const Contacts = () => {
    return <>
        <Container>
          <Grid> 
            <Gcard />
          </Grid>
          
            
            <br />
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    
                </Grid>
                <Grid container item spacing={3}>
                    
                </Grid>
                <Grid container item spacing={3}>
                    
                </Grid>
            </Grid>


        </Container>
    </>
}
import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { Gcard } from "../../components/Gcard/Gcard"



export const Contacts = () => {
    return <>
       <br />
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
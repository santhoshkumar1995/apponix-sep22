import { Grid } from "@mui/material"
import { Container } from "react-bootstrap"
import { Topcard } from "../../components/Topcard/Topcard"




interface IAbout{}
export const About:React.FC<IAbout>=(pros)=>{
    return <>
   <Container>
     <Grid>
        <Topcard img={"img"} />
     </Grid>
   </Container>


    </>
}
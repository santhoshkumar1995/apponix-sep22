import { Grid } from "@mui/material"
import { Container } from "react-bootstrap"
import { Topcard } from "../../components/Topcard/Topcard"
import background from "../../image/back ground images/b1.jpg"



interface IAbout{}
export const About:React.FC<IAbout>=(pros)=>{
    return <div style={{ backgroundImage: `url(${background})` }}>
    <br />
   <Container>
   <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      ><Topcard img={"img"} /></Grid>
     
   </Container>


    </div>
}
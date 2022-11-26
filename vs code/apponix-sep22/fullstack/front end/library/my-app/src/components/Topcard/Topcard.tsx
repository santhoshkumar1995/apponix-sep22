import { Card } from "react-bootstrap"
import img from '../../image/about.jpg'
interface ITopcard{
    img:string
}
export const Topcard: React.FC<ITopcard> = (props) =>{
    return<>
    <Card className="bg-dark text-white" >
      <Card.Img height={'100%'} width={'100%'} src={img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>About</h1></Card.Title>
        <Card.Text>
            
          
        </Card.Text>
        <Card.Text>Thank you</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </>
}
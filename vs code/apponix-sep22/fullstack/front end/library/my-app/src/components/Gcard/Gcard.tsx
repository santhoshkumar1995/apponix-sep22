import { Card } from "react-bootstrap"
import img from '../../image/con1.jpg'

interface IGcard{}
export const Gcard:React.FC<IGcard>=(pros)=>{
    return <> <Card>
    <Card.Body>
      <Card.Text>
        <h1> <b>number:</b>8870554134</h1>
        <h2><b>Mail:</b>manisanthosh4@gmail.com</h2>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={img} />
  </Card></> }
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
export default function NotFoundPage() {
    return (
        <Container>
        <Row className="mt-5">
            <Col md={{span:6,offset:3}}className="text-center">
                 <img style={{width:'100%'}} src="/img/error404.svg"
                 alt=""/>
                 <h2>¿Perdido?</h2>
            <p>Ir al <Link to={routes.home}>inicio...</Link></p>
            </Col>
            
        </Row>
     </Container>
    )
}


import {Container,Row,Col,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
export default function HomePage() {
    return (
        <Container>
        <Row className="mt-5">
            <Col md={{span:6}} className="mb-5">
                <h2>Bienvenido a Nuestro Gestór de Proyectos</h2>
                <div>
                    <Link to={routes.login}> Ingresa  </Link> o <Button as={Link} to={routes.register} className="ml-1"> Crea tu propia cuenta</Button>
                </div>
            </Col>
            <Col>
                <img className="img-fluid"
                   src="/img/gestorProyectos.svg" 
                   alt=""
                   />
            </Col>
        </Row> 
         
        </Container>
    )
}

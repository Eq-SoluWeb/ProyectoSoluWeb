import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"
import {Container,Row,Col,Button,Card} from "react-bootstrap";
 

const userCredentials={}
export default function LoginPage() {
    const location=useLocation();
    const{login}=useAuth();
    return (  
        <Container>
            <Row>
            <Col>
                <Card>
                      hola
                </Card>
            </Col>
            <Col>
            </Col>
            </Row>
        </Container>
    );
}

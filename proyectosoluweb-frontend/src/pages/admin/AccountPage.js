import userEvent from "@testing-library/user-event";
import {Container,Row,Col,Button,Card} from "react-bootstrap";
import useAuth from "../../auth/useAuth";
export default function AccountPage() {
    const {user}=useAuth()
    return (
        <Container>
             <Row className="mt-4">
             <Col xs={12} className="text-center">
             <img  src="/img/avatar.svg" alt="Profile" style={{width:200,height:200,  objectFit:"cover"}}/>
             </Col>
             <Col>
             <Card>
             <p><b>Nombre:</b>{userEvent.nombreCompleto}</p>
             </Card>
             </Col>
             </Row>
        </Container>
    )
}

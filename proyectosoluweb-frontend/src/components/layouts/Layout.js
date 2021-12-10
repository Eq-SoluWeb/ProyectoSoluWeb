import Navigation from "../Navigation";
import { Container } from "react-bootstrap"; 
export default function Layout({children}) {
    return (
        <div>
        <Container>
            <Navigation/>
            {children}
            </Container>
        </div>
    )
}

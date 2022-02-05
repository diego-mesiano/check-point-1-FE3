import Card from "../Card"
import { Container, Row } from "react-bootstrap"

export default function Top3() {
    return (
        <>
            <div className="top3-cripto">
                <Container >
                    <Row className="justify-content-between">

                        <Card />
                        <Card />
                        <Card />

                    </Row>

                </Container>

            </div>
        </>
    )
}
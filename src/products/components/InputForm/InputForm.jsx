import { Container, Row } from "react-bootstrap";
import Filter from "./FilterInput.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useState } from "react";
import '../../../styles/inpForm.css';

const ImputForm = (props) => {
    const { info, setInfo, search, setSearch,
        action, setAction, modalSettings, setModalSettings } = props;

    const [missing, setMissing] = useState({ description: false, price: false, state: false });

    return (
        <Container className="mt-2">
            <Row className="d-flex justify-content-center form-input-box mb-3">
                <Product info={info} setInfo={setInfo} missingInput={missing.description} />
            </Row>

            <Row className="d-flex justify-content-center form-input-box mb-3">
                <Price info={info} setInfo={setInfo} missingInput={missing.price} />
            </Row>

            <Row className="d-flex justify-content-center form-select-custome mb-5">
                <State info={info} setInfo={setInfo} missingInput={missing.state} />
            </Row>

            <Row className="d-flex justify-content-center form-input-box mb-5">
                <Filter setSearch={setSearch} />
            </Row>

            <Row className="d-flex justify-content-center form-buttons mb-5">
                <RegisterButton
                    info={info}
                    missing={missing}
                    setMissing={setMissing}
                    action={action}
                    setAction={setAction}
                    search={search}
                    setSearch={setSearch}
                    modalSettings={modalSettings}
                    setModalSettings={setModalSettings} />
            </Row>
        </Container>
    )
}

export default ImputForm;
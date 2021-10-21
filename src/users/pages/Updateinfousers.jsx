import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../../shared/Header.jsx";
import ProductNav from "../../shared/ProductNav.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

// import Table from 'react-bootstrap/Table'

const Updateinfousers = () => {
  return (
    <div className="container-Category">

      <Header headerText={"Actualización de usuarios"} />
      {/* <ProductNav navSwitch={"Management"} page={"users"} /> */}

      <Container >
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">
                <Form.Label>Actualizar información de usuario</Form.Label>
                <Form.Control type="email" placeholder="Nombre o ID" />

              </Form.Group>
          <div className="space-button">
              <Link to="/categories/users">
            <button variant="primary" type="submit" className="float-right" >
              Listar
            </button>
            </Link>

            <Link to="/categories/users/updateinfousers">
              <button variant="primary" type="submit" className="float-right" >
                Actualizar
              </button>
            </Link>




            <Link to="/categories/users/updaterolusers">
            <button variant="primary" type="submit" className="float-right" >
              Cambiar Rol
            </button>
            </Link>

            </div>
            </Form>


          </Col>


          <Col >

            <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="name" placeholder="Nombres" />
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="name" placeholder="Apellidos" />
              <Form.Label>Identificacion</Form.Label>
              <Form.Control type="name" placeholder="Identificacion" />
              <Form.Label>Procedencia</Form.Label>
              <Form.Control type="name" placeholder="Procedencia" />
              <Form.Label>Estado</Form.Label>

              <FloatingLabel controlId="floatingSelect" label=""  >
                <Form.Select aria-label="Floating label select example" >
                  <option>Estado</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="" >
                <Form.Select aria-label="Floating label select example" >
                  <Form.Label>Rol</Form.Label>
                  <option>Rol</option>
                  <option value="1">Administrador</option>
                  <option value="2">Vendedor</option>
                </Form.Select>
              </FloatingLabel>
              <div className="for-save">
              <button type="submit" >
              Guardar
            </button>
            </div>
            </Form.Group>
            
          </Col>
          



        </Row>






        <Footer />
      </Container>
    </div>
  )
}
export default Updateinfousers
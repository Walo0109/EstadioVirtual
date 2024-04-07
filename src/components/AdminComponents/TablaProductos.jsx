import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CreateProductModal = ({ onCreate }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [image, setImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos ingresados, como enviarlos a un servidor
    onCreate({ name, address, discipline, image });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formDiscipline">
              <Form.Label>Disciplina</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la disciplina" value={discipline} onChange={(e) => setDiscipline(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateProductModal;

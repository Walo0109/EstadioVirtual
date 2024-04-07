import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

function TablaProductos() {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [image, setImage] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [formError, setFormError] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setSelectedCardIndex(null);
    setName('');
    setAddress('');
    setDiscipline('');
    setImage('');
    setFormError('');
  };

  const handleOpenModal = (index) => {
    setShowModal(true);
    setSelectedCardIndex(index);
    const selectedCard = cards[index];
    if (selectedCard) {
      setName(selectedCard.name);
      setAddress(selectedCard.address);
      setDiscipline(selectedCard.discipline);
      setImage(selectedCard.image.url);
    }
  };

  const handleCreateClick = () => {
    if (!name || !address || !discipline || !image) {
      setFormError('Por favor completa todos los campos.');
      return;
    }

    const newCard = { name, address, discipline, image: { url: image } };
    setCards(prevCards => [...prevCards, newCard]);
    handleClose();
  };

  const handleEditClick = () => {
    if (!name || !address || !discipline || !image) {
      setFormError('Por favor completa todos los campos.');
      return;
    }

    const updatedCards = [...cards];
    updatedCards[selectedCardIndex] = { name, address, discipline, image: { url: image } };
    setCards(updatedCards);
    handleClose();
  };

  const handleDeleteClick = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado.',
          'success'
        );
      }
    });
  };

  return (
    <>
      <div className='text-center mb-4'>
        <Button variant="success" onClick={() => handleOpenModal(null)}>+ Agregar Cancha</Button>
      </div>

      <Row xs={1} md={2} className="g-4">
        {cards.map((card, index) => (
          <Col key={index}>
            <Card className="m-2 p-2">
              <Card.Body>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      src={card.image.url}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs={8} className="text-left">
                    <h1>{card.name}</h1>
                    <h3>
                      <FaMapMarkerAlt />
                      {card.address}
                    </h3>
                    <h5>{card.discipline}</h5>

                    <Button variant="primary" className="m-1">
                      {card.show ? 'Ocultar' : 'Mostrar'}
                    </Button>
                    <Button variant="warning" className="m-1" onClick={() => handleOpenModal(index)}>
                      <FaEdit />
                    </Button>
                    <Button variant="danger" className="m-1" onClick={() => handleDeleteClick(index)}>
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCardIndex !== null ? 'Editar Producto' : 'Crear Producto'}</Modal.Title>
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
              <Form.Select value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                <option value="">Selecciona una disciplina</option>
                <option value="Fútbol 5">⚽︎Fútbol 5</option>
                <option value="Fútbol 7">⚽︎Fútbol 7</option>
                <option value="Fútbol 11">⚽︎Fútbol 11</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la URL de la imagen" value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Group>
          </Form>
          {formError && <p style={{ color: 'red' }}>{formError}</p>}
        </Modal.Body>
        <Modal.Footer>
          {selectedCardIndex !== null ? (
            <Button variant="danger" onClick={() => handleDeleteClick(selectedCardIndex)}><FaTrash /> Eliminar</Button>
          ) : null}
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={selectedCardIndex !== null ? handleEditClick : handleCreateClick}>
            {selectedCardIndex !== null ? 'Guardar cambios' : 'Crear'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TablaProductos;
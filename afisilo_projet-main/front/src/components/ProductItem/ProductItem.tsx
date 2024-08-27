import React from 'react';
import './ProductItem.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import { Link } from 'react-router-dom';

const ProductItem = (props: any) => {
  const product = props.product;
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ProductItem flex column jcsb p-1" data-testid="ProductItem">
      <div className="border p-1 shadow">
        <div className="ProductItem-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="ProductItem-name text-center">
          <strong>
          {product.name}
          </strong>
        </div>
        <button className="btn btn-primary rounded-0 w-100" onClick={handleShowModal}>
          + En savoir plus
        </button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered size='lg' >
        <Modal.Header closeButton>
          {/* <Modal.Title>{product.name}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="col-md-6">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>

            <Link to="/contact" className="btn btn-success w-100 rounded-0">Contactez-Nous</Link>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductItem;

import react, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Example(props: any) {
  const [show, setShow] = useState(true);
  const { handleClose } = props
  const { title, content, image } = props.service

  // const handleClose = () => {
  //   setShow(false)
  // };

  const handleShow = () => setShow(true);

  return (
    <>
      {
      /* 
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> 
      */
      }
      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-image">
            <img  src={image} alt="" height={400} />
          </div>
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Link to="/contact">
          <Button variant="primary">
            Nous contacter
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

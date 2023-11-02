import Card from 'react-bootstrap/Card';
import Perfil from '../pages/Perfil';
import ListGroup from 'react-bootstrap/ListGroup';

function Producto() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://storage.googleapis.com/preminens-slbu-p/pim/cc/cl/product-ecommerce-alta/EMR/7801610285800.jpg" />
      <Card.Body>
        <Card.Title>Nombre</Card.Title>
        <Card.Text>
          Descripcion...
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Valor</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href= '../pages/Perfil'>Ver Producto</Card.Link>
        <Card.Link href="#">Agregar al carrito</Card.Link>
        <Card.Link href="#">Ver Comercio</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Producto;
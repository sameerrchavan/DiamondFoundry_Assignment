import React from 'react';
import './ProductCard.scss';
import { ListGroupItem, Row, Col } from 'reactstrap';
import { dashboardActions } from '../../../redux';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.addToCard = this.addToCard.bind();
  }

  addToCard(e,product){
    console.log("add to card",product);
    dashboardActions.addItemToCardList(product)
  }

render() {
  let product = {};
  if(this.props.data) {
    product = this.props.data;
  }
  
  return (<div className="productCard" key={this.props.value}>
        <ListGroupItem>
        <Row>
          <Col xs="4">
            <img style={{ width: '100%' }} src= {product? 'images/'+product.pic:''}></img>
          </Col>
          <Col xs="8">
            <div>{product?product.title:''}</div>
            <div>{product?product.price:''}</div>
            <div>
              <button className='addtocardbtn' onClick={(event)=>{this.addToCard(event,product)}}>Add To card
            </button>
            </div>
          </Col>
        </Row>
        </ListGroupItem>     
    </div>);
}
}

export default ProductCard;
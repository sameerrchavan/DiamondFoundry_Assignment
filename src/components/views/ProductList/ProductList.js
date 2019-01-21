import React from 'react';
import './ProductList.scss';
import { ListGroup } from 'reactstrap';

import { ProductCard } from '../../core';

const ProductList = (props) => {
  return (<div >
      <span><b>Products</b></span>
      <ListGroup>
        {
          props.list.map((item,index) => <ProductCard value={index} data={item}/>)
        }
      </ListGroup>
    </div>);
}

export default ProductList;

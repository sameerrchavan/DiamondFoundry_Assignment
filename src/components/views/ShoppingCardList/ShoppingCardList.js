import React from 'react';
import './ShoppingCardList.scss';
import { Table } from 'reactstrap';

const ShoppingCardList = (props) => {
  return (<div className="shoppingCardList">
            <span><b>Shopping Cart</b></span>
            <Table className="tableStyle">
              <thead>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
              </thead>
              <tbody>
              {
                  props.list.map((item,index) =>
                  <tr key={index}>
                    <td className="cardtitle">{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                </tr>)
              }
              </tbody>
            </Table>
    </div>);
}

export default ShoppingCardList;

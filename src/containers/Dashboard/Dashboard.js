import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

import './Dashboard.scss';
import { dashboardActions } from '../../redux';
import { ProductList, ShoppingCardList } from '../../components/views';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
  dashboardActions.getProductListOnDashboard();
}
render() {
 console.log('Dashboard', this.props);
  return (
    <div>
      <div className="header">
        <b>Diamond Foundry - React Test </b>
      </div>
      <Row>
        <Col xs="6" className='divide'><ProductList list={this.props.info.productList} /></Col>
        <Col xs="5" className='divide'><ShoppingCardList list={this.props.info.currentCartList}/></Col>
      </Row>
    </div>
  );
}
}

const mapStateToProps = state => ({
  info: state.dashboardReducer,
  uiUtils: state.uiUtilsReducer,
});

Dashboard.propTypes = {
  history: PropTypes.object,
};

export default connect(mapStateToProps)(
  Dashboard
);

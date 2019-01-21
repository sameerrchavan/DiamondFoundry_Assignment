import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      currentPath: props.currentPath,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
    });
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.currentPath && prevState.currentPath !== nextProps.currentPath) {
      return {
        error: false,
      };
    }
    return prevState;
  }

  render() {
    const { error } = this.state;

    return error ? (
      <div className={styles.errorBoundary}>
       Add your error message
      </div>
    ) : (
      this.props.children
    );
  }
}

ErrorBoundary.propTypes = {
  currentPath: PropTypes.string,
};

export default ErrorBoundary;

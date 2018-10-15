import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    //Component just got rendered
    componentDidMount() {
      this.shouldNavigateAWay();
    }

    //component just re-rendered
    componentDidUpdate() {
      this.shouldNavigateAWay();
    }

    shouldNavigateAWay() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

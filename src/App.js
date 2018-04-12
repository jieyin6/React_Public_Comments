import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import localStore from './util/localStore';
import {CITYNAME} from './config/localStorageKey'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoFromActions from './redux/constants/userinfo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    initDone:true
    }
  }
  componentDidMount() {
    let cityName = localStore.getItem(CITYNAME)
    if (cityName == null) {
        cityName = '北京'
    }   
    this.props.userInfoActions.update({
      cityName:cityName
    })
  }
  render() {
    let initDone = this.state.initDone
    let loading = initDone ? this.props.children : <div>loading...</div>
    return (
      <Router>
        <div>
        {loading}
        </div>
      </Router>
    )
  }
}
function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions:bindActionCreators(userInfoFromActions)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

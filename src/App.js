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
  // return {
  //    userInfo:state.userinfo 后面这个是reducers/index里的userinfo
 // }
  return {}
}
function mapDispatchToProps(dispatch) {
  //dispatch 触发数据变化
  return {
    //userInfoActions 是props名字 作为属性传给组件 通过 this.props.userInfoActions取
    // this.props.userInfoActions.update(data) 使用来更新state  /redux/actions里的函数update
    userInfoActions:bindActionCreators(userInfoFromActions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Store from './Store/store'
import Nav from './Component/navBar'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ""
    }
  }
  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState({
        data:localStorage.getItem('token')
      })
    }
  }


  render() {
    return (
      <div className="app">
        <Provider store={Store}>
          <div >
            <Nav />
          </div>


        </Provider>


      </div>
    )
  }
}
export default App;


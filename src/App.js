import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Plan from './Plan';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCard from './pages/AllCard'
import Card from './pages/Card'
import Navbar from './components/Navbar';
class App extends Component {
  state = {
    items: [],
    text: ""
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handdleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = (id) => {
    const OldItems = [...this.state.items]
    const items = OldItems.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items })
  }

  render() {
    return (
      <div className='container-fluid my-5'>
        
        <Navbar />

        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className='text-center'>Today's Plan</h1>
            <div className="row my-4">
              <div className="col-9">
                <input type="text"
                  className='form-control'
                  placeholder='write plan here'
                  value={this.state.text}
                  onChange={this.handleChange} />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5' onClick={this.handdleAdd}>
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan value={value} key={i} id={i} handleDelete={this.handleDelete} />
                    })
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
                  
        <br /><br /><br /><br />
        <BrowserRouter>

          <Routes>

            <Route exact path="/all-card" element={<AllCard />}></Route>
            <Route exact path="/card" element={<Card />}></Route>


          </Routes>

        </BrowserRouter>


      </div>
    )
  }
}

export default App;
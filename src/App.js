import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Card from './Components/Card';
import React, { Component } from 'react'
import { API_KEY,BASE_URL } from './utility/constent';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      metaData: undefined

    }
  }

  componentDidMount() {
    this.fetchMyApi().then((data) => {
      const { items, ...rest } = data
      this.setState({
        videos: items,
        metaData: rest
      })
    })
  }

  fetchMyApi = async () => {
    try {
      const res = await fetch(`${BASE_URL}videos?part=snippet&part=statistics&chart=mostPopular&maxResults=50&key=${API_KEY}`)
      return await res.json()
    }
    catch(error){
      console.log(`this error is occured during fetch ${error}`)
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2">
          {this.state.videos.map((videos,index) => (
            <Card key={videos.id} {...videos}/>
          ))}
        </div>
      </div>
    )
  }
}

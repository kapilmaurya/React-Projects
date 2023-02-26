import React, { Component } from 'react'
import Tseries from '../Assets/Tseries.jpg'
import {API_KEY,BASE_URL} from '../utility/constent'
// import { channelid} from '../utility/id'
export default class Avtar extends Component {
    
//   constructor(props){
//     super(props)
//     this.state={
//       channelData: []
//     }
    
   
    
// }

// componentDidMount() {
//   // const {channelId}=this.props
//   // console.log(this.channelId)
//   const arr=this.props
//       const channelid=Object.values(arr).join("")
//     this.fetchavtar().then((data) => {
//           console.log(data)
//           const {items} = data
//           const {snippet}=items
//           const {thumbnails}=snippet
//           this.setState({
//                 channelData: thumbnails
//             })
//             // console.log(channelData)
//           })
//           }
//           fetchavtar = async () => {
// console.log(channelid)
            
//               const res = await fetch(`${BASE_URL}channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelid}&key=${API_KEY}`)
//       return await res.json()
//   }
    

    render() {
      
      // console.log(Object.values(arr).join(""))
        return (
          <div
            className={`rounded-full overflow-hidden h-${this.props.size || 12} w-${
              this.props.size || 12
            }`}
          >
            <img src={Tseries} alt="avatar" />
          </div>
        );
      }
}

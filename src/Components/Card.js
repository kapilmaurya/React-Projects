import React, { Component } from 'react'
import thumbnail from '../Assets/thumbnail.webp'
import Avtar from './Avtar'
import abbreviateNumber from '../utility/NumberFormat'
import {channelid} from '../utility/id'

export default class Card extends Component {

   

    render() {
        const { snippet, statistics } = this.props
        const { publishedAt, title, thumbnails, channelTitle } = snippet
        let {channelId}=snippet
        const { viewCount } = statistics
        return (
            <div className="flex flex-col gap-y-4">
                <div className="rounded-xl overflow-hidden">
                    {/* thumbnail */}
                    <img src={thumbnails.high.url} alt="thumbnail" className="" />
                </div>
                <div className="flex gap-x-4">
                    <div>
                        {/* {console.log(channelId)} */}
                        <channelid {...channelId}/>                        
                        <Avtar />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{abbreviateNumber(viewCount)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

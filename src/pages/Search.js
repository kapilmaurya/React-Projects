import React, { Component } from 'react';
import Card from '../Components/Card';
import Layout from '../Components/Layout';
import { API_KEY, BASE_URL } from '../utility/constent';
import Avtar from '../Components/Avtar';
import abbreviateNumber from '../utility/NumberFormat'
import { BsDot } from 'react-icons/bs'
import { timeDifferenceForDate, readableTimestamp } from "readable-timestamp-js";
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Search: [],
            metaData: undefined

        }
    }

    componentDidMount() {
        this.fetchMyApi().then((data) => {
            console.log(data)
            const { items, ...rest } = data
            this.setState({
                Search: items,
                metaData: rest
            })
        })
    }

    fetchMyApi = async () => {
        try {
            const res = await fetch(`${BASE_URL}search?part=snippet&part=statistics&channelType=any&q=learn%20with%20hkr&key=${API_KEY}`)
            return await res.json()
        }
        catch (error) {
            console.log(`this error is occured during fetch ${error}`)
        }
    }

    render() {

        return (
            <Layout>
                <div className="ml-auto mr-auto grid gap-y-8">
                    {this.state.Search.map((search, index) => {
                        const { id, snippet, statistics} = search;
                        const { kind, videoId } = id;
                        const { publishedAt, title, channelId, thumbnails, channelTitle, description } = snippet;
                        const {viewCount}=statistics
                        const date=publishedAt
                        switch (kind) {
                            case 'youtube#channel':
                                return (
                                    <div className="flex flex-row gap-x-4 items-center">
                                        <div className="rounded-xl overflow-hidden h-52 w-72">
                                            {/* thumbnail */}
                                            <img src={thumbnails.high.url} alt="thumbnail" className="rounded-full h-44 w-44" />
                                        </div>
                                        <div className="flex gap-x-4 w-85">
                                            <div>
                                                <h5 className='font-sans text-lg'>{title}</h5>
                                                <h5 className='font-sans text-sm'>@{channelTitle}</h5>
                                                <p className='font-sans text-sm'>{description}</p>
                                            </div>
                                            {/* <div>
                                            <h4>{title}</h4>
                                            <div className='flex  items-center'>
                                                <span>{abbreviateNumber(viewCount)}</span>
                                                <span><BsDot /></span>
                                                <span>{timeDifferenceForDate(date)}</span>
                                            </div>

                                        </div> */}
                                        </div>
                                    </div>)
                                break;
                            case 'youtube#playlist':
                                return <h1>this is a playlist</h1>
                                console.log('playlist')

                                break;
                            default:
                                return (
                                    <div className="flex flex-row gap-x-4 items-center">
                                        <div className="rounded-xl overflow-hidden h-52 w-72">
                                            {/* thumbnail */}
                                            <img src={thumbnails.high.url} alt="thumbnail" className="" />
                                        </div>
                                        <div className="flex gap-x-4 w-85">
                                            <div>
                                                <h5 className='font-sans text-lg'>{title}</h5>
                                                <div className='flex  items-center'>
                                                    <span>{abbreviateNumber(viewCount)}</span>
                                                    <span><BsDot /></span>
                                                    <span>{timeDifferenceForDate(date)}</span>
                                                </div>
                                                <h5 className='font-sans text-sm'>@{channelTitle}</h5>
                                                <p className='font-sans text-sm'>{description}</p>
                                            </div>
                                        </div>
                                    </div>)

                        }

                    })}

                </div>
            </Layout>
        )
    }
}

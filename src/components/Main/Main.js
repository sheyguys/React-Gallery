import React, { Component } from 'react';
import './Main.scss';
import Axios from 'axios';

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }


    search = async (keyword) => {
        const response = await Axios.get('https://api.unsplash.com/search/photos', {
            params: { query: keyword },
            headers: {
                Authorization: 'Client-ID a3dea89c2d634eb98b0f44feeb8c1e63ea9baea26d7c4c320fc222e686ffb7d7'
            }
        })
        this.setState({ images: response.data.results })
        console.log(this.state.images)
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="title-box">
                        <div className="title">HappyCoding Gallery</div>
                    </div>
                    <div className="search-box">
                        <div className="container">
                            <input type="text" placeholder="Search Images!" onChange={(event) => { this.search(event.target.value) }} />
                            <div className="search"></div>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className = "gallery-box">
                        {this.state.images.map((pic) => (
                            <div className="card" key={pic.id}>
                                <img className="pic" src={pic.urls.regular} alt="logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;
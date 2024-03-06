import React, { Component, Fragment } from 'react'
import Hls from 'hls.js';

export default class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camID: this.props.match.params.id,
        };
        this.videoRef = React.createRef();
    }
    componentDidMount() {
        // console.log("ID : ",this.state);
        this.setState({
            camID: this.props.match.params.id
        })
        const data = this.state.camID;
        const hlsUrl = 'http://192.168.1.149:8000/live/'+data+'/index.m3u8';
        // console.log("hlsUrl : ", hlsUrl);
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsUrl);
            hls.attachMedia(this.videoRef.current);
        } else if (this.videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            this.videoRef.current.src = hlsUrl;
        }
    }
    render() {
        // <iframe src="http://192.168.1.149:8000/live/CAM01/index.m3u8" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        const data = this.state.camID;
        return (
            <Fragment>
                <h2>LIVESTREAM : {data}</h2>
                <video 
                    ref={this.videoRef} 
                    width="100%"
                    height="auto"
                    autoplay={true} // Set to true if you want autoplay
                    controls={true} // Set to true if you want player controls
                />
            </Fragment>
        );
    }
}
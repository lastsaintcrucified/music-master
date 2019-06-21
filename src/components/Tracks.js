import React, { Component } from 'react';

class Tracks extends Component{
    state = {playingAudio: false, audio: null, playingPreviewUrl: null}
    playAudio = previewUrl => () =>{
        const audio = new Audio(previewUrl);
        if(!this.state.playingAudio){
            audio.play();
            this.setState({playingAudio: true, audio, playingPreviewUrl:previewUrl});
        }else{
            this.state.audio.pause();
            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({playingAudio: false});     
            }else{
                audio.play();
                this.setState({audio, playingPreviewUrl: previewUrl});
            }
            
            
        }
    }

    trackIcon = track =>{
        if(!track.preview_url){
            return <span>N/A</span>
        }
        if(this.state.playingAudio && this.state.playingPreviewUrl === track.preview_url){
            return <span>| |</span>
        }
        return <span>&#9654;</span>
    }

    render(){
        const { tracks } = this.props;
        return(
            <div style={{marginTop:30}}>
                {
                    tracks.map(track =>{
                        const {id, name, album, preview_url} = track;
                        return(
                            <div 
                                onClick={this.playAudio(preview_url)}
                                key={id}
                                className='track'
                            >
                                <img
                                    src={album.images[0].url}
                                    alt='track-image'
                                    className='track-image'
                                />
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;
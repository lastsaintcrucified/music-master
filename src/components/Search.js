import React, { Component } from 'react';

class Search extends Component{
    state = {artistQuery: ''}
    updateArtistQuery = event =>{
        this.setState({artistQuery:event.target.value});
    }

    handleKeyPress = event =>{
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }
    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery);
    }
    render(){
        return(
            <div>
                <input
                    style={{marginRight:5}}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.updateArtistQuery} 
                    placeholder='search for an Artist' 
                />
                <button style={{borderRadius:4}} onClick={this.searchArtist}>search</button>
            </div>
        )
    }
}

export default Search;
import React from 'react';

const Artist = ({artist}) =>{
    
    if(!artist){
        return null;
    }

    const { images, genres, name, followers,popularity } = artist;

    return(
        <div style={{marginTop:30}}>
            <h3>{name}</h3>
            <p>Genre:{genres.join(',')}. Popularity: {popularity}</p>
            <p>{followers.total} followers</p>
            <img
                src = {images[0] && images[0].url}
                alt = 'artist profile'
                style = {{
                    width: 200,
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 100
                }}
            />

        </div>
    )
}

export default Artist;
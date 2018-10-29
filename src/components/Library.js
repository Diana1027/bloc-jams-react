import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from '../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        {this.state.albums.map((album, index) => (
          <Link className="link" to={`/album/${album.slug}`} key={index}>
            <img
              className="img-thumbnail"
              src={album.albumCover}
              alt={album.title}
              style={{ height: 200, width: 200 }}
            />
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length} songs</div>
          </Link>
        ))}
      </section>
    );
  }
}

export default Library;

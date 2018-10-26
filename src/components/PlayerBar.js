import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" type="button" onClick={this.props.handlePrevClick}>
            <span className="ion-md-skip-backward" />
          </button>
          <button id="play-pause" type="button" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'} />
          </button>
          <button id="next" type="button">
            <span className="ion-md-skip-forward" />
          </button>
        </section>

        <section id="time-control">
          <div className="current-time">-:--</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">-:--</div>
        </section>

        <section id="volume-control">
          <div className="icon ion-volume-low" />
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high" />
        </section>
      </section>
    );
  }
}

export default PlayerBar;

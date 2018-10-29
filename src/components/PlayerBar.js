import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section id="player-bar" className="player-bar">
        <section id="buttons">
          <button
            className="btn btn-default"
            id="previous"
            type="button"
            onClick={this.props.handlePrevClick}
          >
            <span className="ion-md-skip-backward" />
          </button>
          <button
            className="btn btn-default"
            id="play-pause"
            type="button"
            onClick={this.props.handleSongClick}
          >
            <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'} />
          </button>
          <button
            className="btn btn-default"
            id="next"
            type="button"
            onClick={this.props.handleNextClick}
          >
            <span className="ion-md-skip-forward" />
          </button>
        </section>

        <section id="time-control">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={this.props.currentTime / this.props.duration || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>

        <section id="volume-control">
          <div className="icon ion-md-volume-high" />
          <input
            type="range"
            className="seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
        </section>
      </section>
    );
  }
}

export default PlayerBar;

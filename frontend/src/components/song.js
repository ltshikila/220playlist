import React, { Component } from 'react';
import './song.css';
import deleteicon from '../../public/assets/images/trash.png';

class Song extends Component {
  handleDelete = () => {
    const { _id, onDelete } = this.props; // Get song ID and delete handler from props
    onDelete(_id); // Call the delete function passed from the parent
  };

  render() {
    const {
      coverart, // Adjusted based on expected prop name
      name: songName,
      artist,
      album,
      year,
      uploaded_by: addedBy, // Adjusted to match the expected prop name
      length,
      upload_date: dateAdded, // Adjusted to match the expected prop name
    } = this.props;

    return (
      <div className="song">
        <div className="song-cover">
          <img src={coverart} alt={`${songName} cover`} />
        </div>
        <div className="song-info">
          <div className="song-name">{songName}</div>
          <div className="song-artist">{artist}</div>
        </div>
        <div className="song-album">{album}</div>
        <div className="song-year">{year}</div>
        <div className="song-added-by">{addedBy}</div>
        <div className="song-length">{length}</div>
        <div className="song-date-added">{new Date(dateAdded).toLocaleDateString()}</div>
        <div className="song-delete" onClick={this.handleDelete}>
          <img src={deleteicon} alt="delete icon" />
        </div>
      </div>
    );
  }
}

export default Song;

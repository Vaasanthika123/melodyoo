import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LibraryPage.css'; // Import your custom CSS file


const LibraryPage = () => {
  const myFavorites = [
    { id: 1, title: 'Song 1', artist: 'Anirudh Ravichandhar' },
    { id: 2, title: 'Song 2', artist: 'G.v prakash' },
    { id: 3, title: 'Song 3', artist: 'Yuvan Shankar Raja' },
   
   
   
  ];




  const myMusic = [
    { id: 1, title: 'Song 1', artist: 'Sathosh Narayanan' },
    { id: 2, title: 'Song 2', artist: 'Shreya Ghoshal' },
    { id: 3, title: 'Song 3', artist: 'Chinmayi' },
    { id: 4, title: 'Song 4', artist: 'Sid Sriram' },
   
  ];


  const internationalHits = [
    { id: 1, title: 'Song 1', artist: 'Pradeep Kumar' },
    { id: 2, title: 'Song 2', artist: 'A.R.Rahman' },


   
  ];


  const topHits = [
    { id: 1, title: 'Song 1', artist: 'Shreya Ghoshal' },
    { id: 2, title: 'Song 2', artist: 'Shreya Ghoshal' },


  ];


  return (
    <div className="library-page-container">
      <h2 className="library-title">My Favorites</h2>
      <ul className="list-group song-list">
        {myFavorites.map((song) => (
          <li key={song.id} className="list-group-item">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </li>
        ))}
      </ul>


      <h2 className="library-title">My Music</h2>
      <ul className="list-group song-list">
        {myMusic.map((song) => (
          <li key={song.id} className="list-group-item">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </li>
        ))}
      </ul>


      <h2 className="library-title">International Hits</h2>
      <ul className="list-group song-list">
        {internationalHits.map((song) => (
          <li key={song.id} className="list-group-item">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </li>
        ))}
      </ul>


      <h2 className="library-title">Top Hits</h2>
      <ul className="list-group song-list">
        {topHits.map((song) => (
          <li key={song.id} className="list-group-item">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default LibraryPage;

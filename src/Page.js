import React from 'react'
import Shows from './Shows.js'
import Music from './Music.js'
import News from './News.js'
import Social from './Social.js'

const Page = props => {
  let image = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Haeckel_Phaeodaria_61.jpg';
  let topStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: .5
      };

  return (
    <div>
      <div className="top-container" style={topStyle}>
      </div>
      <div className="band-info">
        <div className="banner-left" className="banner-left">
          <img src="./test_border.png" />
        </div>
        <div className="band-name">
          <h1 className="band-name-text">Summer<br />Beard</h1>
          <Music />
        </div>
        <div className="banner-right">
            <img src="./test_border.png" className="banner-right"/>
        </div>
      </div>
      <div className="info-container">
        <Social />
      </div>
      <div className="mid-container">
        <div className="shows-container">
          <Shows showData="test"/>
        </div>
        <div className="news-container">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Page;

import React from 'react'
import Shows from './Shows.js'
import Music from './Music.js'
import News from './News.js'
import Social from './Social.js'

const Layout = props => {
  let image = './background.jpg';
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
          <img src="./border_1.png" role="presentation"/>
        </div>
        <div className="band-name">
          <div className="band-name-text">
            <h1>Summer<br />Beard</h1>
          </div>
          <Music />
        </div>
        <div className="banner-right">
            <img src="./border_1.png" className="banner-right" role="presentation"/>
        </div>
      </div>
      <div className="social-container">
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

export default Layout;

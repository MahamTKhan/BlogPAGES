import React, { useState } from 'react';
import './bloghome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import card1 from './images/5 Weird Eye Issues You Should Never Ignore.jpg';
import card2 from './images/Silver Moon (ManxMan).jpg';
import card3 from './images/Optic nerve hemorrhage can be a sign of worsening glaucoma with loss of nerve fibers_.jpg';
import card4 from './images/Best Natural Colored Contacts.jpg';

import ImageSlider from './latestintown.js';

const NewWebDesign = () => {
  const [blogPost, setBlogPost] = useState(null);

  const handleClick = async (id) => {
    try {
      const response = await axios.get('/BlogPost.php?{id}'); // Update the URL here
      const data = response.data;
      setBlogPost(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='main'>
      <section className="articleheading">
        <h1>TAKE A READ</h1>
      </section>

      <section className="articles">
        <div className="row">
          <div className="card">
            <div className="face front">
              <h3>RedEye Remedies</h3>
              <img src={card1} alt="RedEye Remedies" />
            </div>
            <div className="face back">
              <h3>RedEye Remedies</h3>
              <p>Many cases of red eye are harmless and respond well to home or over-the-counter treatments.</p>
              <div className="link">
                <button type='button' onClick={handleClick(id)}>Details</button>

              </div>
            </div>
          </div>

          <div className="card">
            <div className="face front">
              <h3>Color Blindness</h3>
              <img src={card2} alt="Color Blindness" />
            </div>
            <div className="face back">
              <h3>Color Blindness</h3>
              <p>What is color blindness? If you have color blindness, it means you see colors differently than most people.</p>
              <div className="link">
                <a href="https://youtu.be/Luo9FK9hFJI">Details</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face front">
              <h3>What's Glaucoma?</h3>
              <img src={card3} alt="What's Glaucoma?" />
            </div>
            <div className="face back">
              <h3>What's Glaucoma?</h3>
              <p>Glaucoma is a serious, lifelong eye disease that can lead to vision loss if not controlled.</p>
              <div className="link">
                <a href="#">Details</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face front">
              <h3>Contact Lenses</h3>
              <img src={card4} alt="Contact Lenses" />
            </div>
            <div className="face back">
              <h3>Contact Lenses</h3>
              <p>A lot of people wear contact lenses to be fashionable and to beautify their eyes.</p>
              <div className="link">
                <a href="#">Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <ImageSlider /> */}
      </section>
    </div>
  );
};

export default NewWebDesign;

import React from 'react';

import runbuddy from "../../assets/images/hero-bg.jpg";
import booklist from "../../assets/images/booklist.PNG";
import healthTracker from "../../assets/images/Health_tracker.PNG";
import photoport from "../../assets/images/photo-port.png";
import notetaker from "../../assets/images/note-taker.png";
import techblog from "../../assets/images/tech-blog.png";
function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">

        <div class="col">
          <div class="card">
            <img
              src={runbuddy}
              alt="run buddy"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jagydas/run-buddy" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://jagydas.github.io/run-buddy/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={booklist}
              alt="booklist"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jagydas/goodReadList" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://jagydas.github.io/goodReadList/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={photoport}
              alt="photo port"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jagydas/photo-port" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://jagydas.github.io/photo-port/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={notetaker}
              alt="Note Taker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jagydas/Note-Taker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://powerful-taiga-65297.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={healthTracker}
              alt="Health Tracker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/warrenp11/health-tracker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://health-tracker-bootcamp.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={techblog}
              alt="Tech blog"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jagydas/tech-blog" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://blooming-stream-19038.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>


  );
}

export default Portfolio;
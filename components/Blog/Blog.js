import React from 'react';
import { Timeline } from 'react-twitter-widgets';

import forumPosts from 'public/data/posts.json';


function Blog() {
  return (
    <div className="section section-blog">
      <div className="blog-wrapper">
        <div className="left-panel" />
        <div className="right-panel">

          <div className="blog-part">
            <h2 className="section-title">Novinky v Komunitě</h2>

            {forumPosts.map(post => (
              <div className="post-wrapper">
                <a href={post.url} target="_blank">
                  <p className="post-date">{post.date}</p>
                  <h3>{post.title}</h3>
                </a>
              </div>
            ))}

            <div className="blog-buttons">
              <div className="blog-button">
                <a href="https://forum.gwei.cz/" target="_blank">
                  <span>VÍCE NOVINEK O <b>GWEI</b></span>
                </a>
              </div>
            </div>
          </div>

          <div className="twitter-wrapper">
            <a href="https://twitter.com/gweicz" className="twitter-header" target="_blank">
              <h2>@GWEICZ</h2>
              <h3>SLEDUJTE NÁS</h3>
            </a>
            <Timeline
              dataSource={{ sourceType: "profile", screenName: "gweicz" }}
              options={{ chrome: "noheader, nofooter", height: "400" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;

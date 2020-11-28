import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <header id="header" className="alt">
          <Header />
        </header>
        <section id="banner">
          <div className="content">
            <header>
              <h1>Something</h1>
              <p>
                I just heard you found the one you've been looking You've been
                looking for I wish I would have known that wasn't me 'Cause even
                after all this time, I still wonder Why I can't move on Just the
                way you did so easily
              </p>
            </header>
            <Link to="/home">Learn More</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

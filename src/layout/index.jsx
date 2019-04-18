import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import "./main.css";

import Header from "../components/Header.js"
import Navigation from "../components/Navigation"
import { Link } from "gatsby"


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="small-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <Header />
        <Navigation />
        {children}

      </div>
    );
  }
}

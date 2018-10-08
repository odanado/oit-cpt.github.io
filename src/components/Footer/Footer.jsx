import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (

      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="notice-container">
        <div className="rss">
            <Link to={url}>
              <Button flat secondary iconClassName="fa fa-rss">-                Subscribe
              </Button>
            </Link>
         </div>
          <div className="copyright">
            <div>{copyright}</div>
          </div>

          <div className="based-on">
            <div>
              Based on{" "}
              <a href="https://github.com/Vagr9K/gatsby-material-starter">
                Gatsby Material Starter
              </a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;


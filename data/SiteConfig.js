module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "oit-cpt official site", // Site title.
  siteTitleAlt: "大阪工業大学 競技プログラミングチーム", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://oit-cpt.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "このサイトは大阪工業大学 競技プログラミングチーム (oit-cpt) の公式サイトです！", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "大阪工業大学 競技プログラミングチーム", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "大阪府枚方市", // User location to display in the author segment.
  userAvatar: "/logos/logo-1024.png", // User avatar to display in the author segment.
  userDescription:
    "このサイトは大阪工業大学 競技プログラミングチーム (oit-cpt) の公式サイトです！", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/oit-cpt",
      iconClassName: "fa fa-github"
    },
    /*
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
    */
  ],
  copyright: "Copyright © 2018. oit-cpt" // Copyright string for the footer of the website and RSS feed.
};

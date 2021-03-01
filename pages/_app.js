import dynamic from "next/dynamic";
import Head from "next/head";

// import "../web/css/bootstrap.css";
// import "../web/css/fontawesome-all.css";
// import "../web/css/magnific-popup.css";
// import "../web/css/swiper.css";
// import "../web/css/styles.css";
// import "jquery";
// import "popper.js";
// import "bootstrap";
// import "jquery.easing";
// import "../web/js/bootstrap.min";
// import "../web/js/jquery.easing.min";
// import "../web/js/jquery.magnific-popup";
// import "../web/js/swiper.min";
// import "../web/js/validator.min";
// import "../web/js/scripts";

// const DynamicComponent = dynamic(() => import("../web/js/bootstrap.min"), {
//   ssr: false,
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#53BC5E" />
        <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#53BC5E" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/fontawesome-all.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
        <script src="/js/jquery.min.js" type="application/javascript"></script>
        <script src="/js/popper.min.js" type="application/javascript"></script>
        <script src="/js/bootstrap.min.js" type="application/javascript"></script>
        <script src="/js/jquery.easing.min.js" type="application/javascript"></script>
        <script src="/js/jquery.magnific-popup.js" type="application/javascript"></script>
        <script src="/js/swiper.min.js" type="application/javascript"></script>
        <script src="/js/validator.min.js" type="application/javascript"></script>
        <script src="/js/scripts.js" type="application/javascript"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

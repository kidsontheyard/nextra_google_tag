import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  );
}

export default MyApp;

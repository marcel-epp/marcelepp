import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);

  const toggleStateActive = () => {
    setActive(!isActive);
  };
  return (
    <>
      <GlobalStyle />
      <Layout
        isActive={isActive}
        setActive={setActive}
        ontoggleStateActive={toggleStateActive}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <GlobalStyle />
      <Layout
        isActive={isActive}
        setActive={setActive}
        onToggleClass={toggleClass}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

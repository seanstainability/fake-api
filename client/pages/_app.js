import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";
import { Hydrate } from "react-query/hydration";

// 페이지 공통 레이아웃, 최초로 실행된다.
const App = ({ Component, pageProps }) => {
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };
  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydrated}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;

import './index.scss'

// 페이지 공통 레이아웃, 최초로 실행된다.
const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    )
}

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default App;
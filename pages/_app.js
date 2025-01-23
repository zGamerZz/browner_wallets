import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
            </head>
            <Component {...pageProps} />
        </>
    );
}

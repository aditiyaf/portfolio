import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
    render() {
        return <Html lang="en-GB">
            <Head />
            <body>
                <div id="modal-root" />
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default Document
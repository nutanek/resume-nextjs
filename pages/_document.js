import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <head>
                    <title>Nutttttttttt</title>
                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                </head>
                <body>
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
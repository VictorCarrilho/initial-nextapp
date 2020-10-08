import React from 'react'
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main>
                <h1>Hello World!</h1>
            </main>
        </Container>
    )
}

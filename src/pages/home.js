import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Stats from '../components/InputStats'

export default function home() {
    return (
        <Layout>
            <Hero />
            <Stats />
        </Layout>
    )
}

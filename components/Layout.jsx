import React from 'react'
import Head from 'next/head';
// import Footer from './Footer'
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = ({ children }) => {
    return (
        <div>
            <div >
                <Head>
                    <title>Ibiza</title>
                </Head>

                <header>
                    <Sidebar />
                </header>
            </div>

            <main>
                <div className="main">
                    <div className="main__content">
                        <TopNav />
                        {children}
                    </div>
                </div>
            </main>

            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    )
}

export default Layout
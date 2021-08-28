import React from 'react'
import Header from './Header'
import Routes from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <Routes/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5

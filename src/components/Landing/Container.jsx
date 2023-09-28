// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <main className="landing__main w-full h-full bg-neutralWhite ">
            <div className="landing__div-container pt-20  ">
                {children}
            </div>
        </main>
    )
}


Container.propTypes = {
    children: PropTypes.node
}

export default Container
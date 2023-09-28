// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ to, icon, text, amount }) => {
    return (
        <Link to={to} className="card w-[400px] h-[251px] box p-6 rounded-3xl bg-peaGreen">
            <div className={`card__div-container  text-black   h-full`}>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='svg-2'>
                        {icon}
                    </div>
                    <div className=''>
                        <h2 className=' header__3 text-black'>{text}</h2>
                        <p className='p4 text-black'>{amount}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    icon: PropTypes.any,
    color: PropTypes.string,
    to: PropTypes.string,
    text: PropTypes.string,
    amount: PropTypes.string
}
export default Card
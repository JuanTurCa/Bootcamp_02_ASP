import Chica from '../assets/img/Chica.png'
import PropTypes from 'prop-types'

export const FNAF2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Chica} alt="Animatronico Freddy" className='image' />
    </div>
  )
}

FNAF2.propTypes = { className: PropTypes.string }
import Banda from '../assets/img/Banda.png'
import PropTypes from 'prop-types'

export const FNAF5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Banda} alt="Animatronico Freddy" className='image' />
    </div>
  )
}

FNAF5.propTypes = { className: PropTypes.string };
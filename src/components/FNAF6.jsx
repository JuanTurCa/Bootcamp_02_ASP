import Oficina from '../assets/img/Ofice.jpg'
import PropTypes from 'prop-types'

export const FNAF6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Oficina} alt="Animatronico Freddy" className='image'/>
    </div>
  )
}

FNAF6.propTypes = { className: PropTypes.string }
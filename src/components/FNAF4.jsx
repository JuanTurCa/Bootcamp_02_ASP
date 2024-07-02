import Foxy from '../assets/img/Foxy.png'
import PropTypes from 'prop-types'

export const FNAF4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Foxy} alt="Animatronico Freddy" className='image'/>
    </div>
  )
}

FNAF4.propTypes = { className: PropTypes.string }
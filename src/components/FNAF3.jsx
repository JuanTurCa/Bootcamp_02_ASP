import Bonnie from '../assets/img/Bonnie.png'
import PropTypes from 'prop-types'

export const FNAF3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Bonnie} alt="Animatronico Freddy" className='image'/>
    </div>
  )
}

FNAF3.propTypes = { className: PropTypes.string }
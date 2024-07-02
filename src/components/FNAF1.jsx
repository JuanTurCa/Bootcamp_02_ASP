import Freddy from '../assets/img/Freddy.png';
import PropTypes from 'prop-types';

export const FNAF1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Freddy} alt="Animatronico Freddy" className='image' />
    </div>
  )
}
FNAF1.propTypes = { className: PropTypes.string }
import { Link } from 'react-router-dom';
import { FNAF1 } from './FNAF1';
import { FNAF2 } from './FNAF2';
import { FNAF3 } from './FNAF3';
import { FNAF4 } from './FNAF4';
import { FNAF5 } from './FNAF5';
import { FNAF6 } from './FNAF6';
 //Help
export const Nav = () => {
  return (
    <div className='container mt-4 father'>
        <Link to='/fnaf1' className='links'>
            <figure className='image-size'>
                <FNAF1 />
                <figcaption>FNAF1</figcaption>
            </figure>
        </Link>
        <Link to='/fnaf2' className='links'>
            <figure className='image-size'>
                <FNAF2 />
                <figcaption>FNAF2</figcaption>
            </figure>
        </Link>
        <Link to='/fnaf3'className='links' >
            <figure className='image-size'>
                <FNAF3 />
                <figcaption>FNAF3</figcaption>
            </figure>
        </Link>
        <Link to='/fnaf4' className='links'>
            <figure className='image-size'>
                <FNAF4 />
                <figcaption>FNAF4</figcaption>
            </figure>
        </Link>
        <Link to='/fnaf5' className='links'>
            <figure className='image-size'>
                <FNAF5 />
                <figcaption>FNAF5</figcaption>
            </figure>
        </Link>
        <Link to='/fnaf6' className='links'>
            <figure className='image-size'>
                <FNAF6 />
                <figcaption>FNAF6</figcaption>
            </figure>
        </Link>
    </div>
  )
}
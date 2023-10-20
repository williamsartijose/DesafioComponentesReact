import './styles.css'
import CarImg from '../../assets/car.png';

export default function Cardcar () {
    return (
        <>
        <div className='dsct-cardcar-container dsct-cardcar-border'>
          <img src={CarImg} alt="Carro" />
          <h3>Lorem ipsum dolor</h3>
        </div>
        </>
    );
}
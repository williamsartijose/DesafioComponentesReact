import CardComment from '../CardComment';
import Cardcar from '../Cardcar';
import './styles.css';
export default function Main() {
    return (
        <>
            <main className="dsct-main-container">
                <div>
                    <h2>Venha nos visitar</h2>
                </div>
                <section className="dsct-cardcar-container dsct-main-section-cardcar-container">
                    <Cardcar />
                    <Cardcar />
                </section>
                <section className='dsct-cardcomments-section'>
                    <div className="dsct-cardcomments-container dsct-main-section-cardcomments-container">
                        <div>
                            <h2>O que estão dizendo</h2>
                        </div>
                      <CardComment/>
                      <CardComment/>
                      <CardComment/>
                      <CardComment/>
                      <CardComment/>
                      <CardComment/>
                    </div>
                </section>
            </main>
        </>

    );
}
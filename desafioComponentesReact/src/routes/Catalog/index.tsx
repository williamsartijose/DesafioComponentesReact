import './styles.css';

import CardComment from '../../components/CardComment';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cardcar from '../../components/Cardcar';

export default function CatalogCT(){
    return(
        <>
        <Header />
        <main>
            <section id='section-catalog-content' className='container'>
                <h2>Venha nos visitar</h2>
                <Cardcar />
                <Cardcar />
            </section>
            <section id='section-description-content' >
                <h2>O que estão dizendo</h2>
                <div className='container-secundary'>
                <CardComment />
                <CardComment />
                <CardComment />
                <CardComment />
                <CardComment />
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
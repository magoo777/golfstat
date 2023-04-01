import { useState } from 'react';
import Layout from '../components/Layout'

import {par} from '../hooks/useStatHook'
import '../Form.css';
import image from '../images/hole.png'
import image2 from '../images/holeNext.png'

function Registrera() {  

const [hole, setHole] = useState(1);

const club = ["drive", "spoon", "iron", "wedge", "pitch", "chip", "long putt", "med putt", "short putt"]



  return (
    <Layout >
        <p>Bana: Rättviks GK</p>
        <section className='wrapper-holes'>
            <div className='first'><img src={image} /></div>
        <div className="App-section">
        <h3>Hål {hole} <span>Par: {par(hole)}</span></h3>
            <form >
            <span className="container__form">
                {club.map(club => {
                    return <>
                                    <h5>{club}</h5>
                <label className="container">
                    <input type="radio" value="bad" />
                    <span className="radioBtn radio__bad"></span>
                </label>
                <label className="container">
                    <input type="radio" value="ok" />
                    <span className="radioBtn radio__ok"></span>
                </label>
                <label className="container">
                    <input type="radio"  value="good" />
                    <span className="radioBtn radio__good"></span>
                </label>
                    </>
                })}
            </span>
            <div className='button-container'>
                <button onClick={() => setHole(hole + 1)}>Next</button>
                <button onClick={() => console.log("reset")}>Reset</button>
                <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
        <div><img src={image2} /></div>
        </section>
        
    </Layout>

  );
}

export default Registrera;

import {totShotForPlayer} from '../hooks/useStatHook'

const shotType = totShotForPlayer();

export const AntalRounds = ({totalRounds, nmbrShots}:any) => (
    <article className="total-rounds-wrapper">
        <h3 className="rubrik">TOTAL ROUNDS</h3>
        <p className="totalRounds">{totalRounds()}</p>
        <div className="flex">
        <div><h5>Perfect shots</h5>
        <p>{Math.round(shotType.totNumPerfect)}%</p></div>
        <div><h5>Good shots</h5>
        <p>{Math.round(shotType.totNumGood)}%</p></div>
        <div><h5>Bad shots</h5>
        <p>{Math.round(shotType.totNumBad)}%</p></div>
        </div>
    </article>    
)
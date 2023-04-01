
import styled from 'styled-components'
import {player} from '../hooks/useStatHook'
import image from '../images/backStat.png'


interface LineProps {
  inputHeight?: number; 
}


const Line = styled.div<LineProps>`
  height: ${(props) => props.inputHeight ? `${props.inputHeight}%` : "0%"};
`;


const club = ["drive", "woods", "iron", "wedge", "pitch", "bunker", "chip", "long putt", "medium putt", "short putt"]

const clubShotCounts = club.map(clubName => {
  const shotCounts = player(clubName);
  return {
    club: clubName,
    ...shotCounts
  };
});




export const ClubStat = () => (

    <article className='clubs-wrapper'>
        {
            clubShotCounts.map((club:any) => {
                return (
                  <div className='statgrid-wrapper' key={club.club}>
                    <div className='statgrid-container'>
                        <Line className='statgrid-perfectshots line' inputHeight={club.perfect}></Line>
                        <Line className='statgrid-goodshots line' inputHeight={club.good}></Line>
                        <Line className='statgrid-badshots line' inputHeight={club.bad}></Line>
                    </div>
                    <h5 className='statgrid-club'>{club.club}</h5>
                </div>
                )
            })
        }

    </article>    
)
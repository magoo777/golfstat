
import Player from '../data/dan_stat.json'
import Player2 from '../data/mats.json'
import Course from '../data/courses.json'

export const data = () => (
    console.log(Player[0])
)

export const totalRounds = () => {
    return Player.length
}


export const nmbrShots = (shot) => {
    switch(shot){
        case "perfect":
            return 50;
        case "good":
            return 75;
        case "bad":
            return 30;

    }
    
        
    
}


export const par = (hole) => {
    let bana = Course.find(name => name.name === "Rättviks Golfklubb")
    return bana.pars[hole -1] 
}



export function player(testClub) {
let numBad = 0;
let numGood = 0;
let numPerfect = 0;
let numTotal = 0;
  for (let el of Player) {
    for (let el2 in el) {
      for (let el3 in el[el2]) {
        if (el3 === testClub) {
       
           numBad += el[el2][el3].bad;
           numGood += el[el2][el3].good;
           numPerfect += el[el2][el3].perfect;

           
        }
      }  
    }
  }
  numTotal += numBad + numGood + numPerfect
  return { "bad" : (numBad/numTotal)*100, "good": (numGood/numTotal)*100, "perfect" : (numPerfect/numTotal)*100, "total" : numTotal}
}

export function totShotForPlayer() {
let numBad = 0;
let numGood = 0;
let numPerfect = 0;
let numTotal = 0;
let totNumBad = 0;
let totNumGood = 0;
let totNumPerfect = 0;
  for (let el of Player) {
    for (let el2 in el) {
      for (let el3 in el[el2]) {
        if (el[el2][el3].bad || el[el2][el3].good || el[el2][el3].perfect) {
          
          numBad += el[el2][el3].bad;
          numGood += el[el2][el3].good;
          numPerfect += el[el2][el3].perfect;

          
       }
      }  
    }
  }
  totNumBad += numBad
  totNumGood += numGood
  totNumPerfect += numPerfect
  numTotal += numBad + numGood + numPerfect
  return { "total" : numTotal, "totNumBad" : (totNumBad/numTotal)*100, "totNumPerfect" : (totNumPerfect/numTotal)*100, "totNumGood" : (totNumGood/numTotal)*100}
}





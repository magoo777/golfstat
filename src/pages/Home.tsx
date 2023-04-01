
import Layout from '../components/Layout'
import { AntalRounds } from '../components/AntalRounds';
import { ClubStat } from '../components/Clubs';
import { Practice } from '../components/Practice';

import {totalRounds, nmbrShots, data} from '../hooks/useStatHook'

function Home() {
  


  return (
    <Layout >
        <AntalRounds nmbrShots={nmbrShots} totalRounds={totalRounds} />
        <Practice />
        <ClubStat />
    </Layout>

  );
}

export default Home;
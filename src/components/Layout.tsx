
import { Header } from '../components/Header'

function Layout({children}:any) {

  
    return (
      <div className="App">
        <Header />
        <main>
            {children}
        </main>
      </div>
    );
  }
  
  export default Layout;
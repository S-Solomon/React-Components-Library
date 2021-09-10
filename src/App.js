import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

function App() {
  // const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  // const drawerToggler = () => {
  //   setSideDrawerOpen(true)
  // }

  // let sideDrawer;
  // let backdrop;

  // if(sideDrawerOpen) {
  //   sideDrawer = <SideDrawer />;
  //   backdrop = <Backdrop />
  // }

  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      {/* {sideDrawer} */}
      {/* {backdrop} */}
      <SideDrawer />
      <Backdrop />
      <main style={{marginTop: '80px'}}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;

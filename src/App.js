// import React from 'react'
// import NavBar from './NavBar.js'
// import MainComponent from './MainComponent'


// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <NavBar />
//         <MainComponent />
//       </div>
//     );
//   }
// }

// export default App

import React from 'react'
import Dashboard from './component/dashboard/index.js'
import AddProduct from './component/addProduct'

class App extends React.Component{
  render(){
    return(
      <div>
        <Dashboard />
        {/* <AddProduct /> */}
      </div>
    );
  }
}

export default App
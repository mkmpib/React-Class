import React from 'react'
import PureComp from './PureComp'

const App = () => {
  return (
    <div>
      <PureComp/>
    </div>
  )
}

export default App




























// import React, {  Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.state = {
//       add:0
//     }
//   }
//   render() {
//     console.log("check rerendering")
//     return (
//       <div>
//         <h1>count:{this.state.count}</h1> <br />
//         <h1>add:{this.state.add}</h1> <br />
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
//         <button onClick={()=>this.setState({add:this.state.add+1})}>Update Count</button>
//       </div>
//     )
//   }
// }


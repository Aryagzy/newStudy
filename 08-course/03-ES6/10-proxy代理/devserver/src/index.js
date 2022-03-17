
import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
class App extends Component{
    componentDidMount(){
        axios.get('/api/name.json').then(res=>console.log(res))
    }
    render(){
        return <div>我是react</div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
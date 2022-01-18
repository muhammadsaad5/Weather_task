import React from 'react';
import Weather from './components/Weather';
class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Weather/>
            </div>
        )
    }

}
export default App;
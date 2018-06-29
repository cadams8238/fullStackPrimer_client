import React, { Component } from 'react';
import CheeseList from './components/cheeseList'

class App extends Component {
    constructor(props) {
        super(props)

        this.cheeses = [
            "Bath Blue",
            "Barkham Blue",
            "Buxton Blue"
        ];
    }



    render() {
        return (
          <CheeseList cheeses={this.cheeses}/>
        );
    }
}

export default App;

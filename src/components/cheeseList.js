import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheeseAction';

export class CheeseList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCheeses())
    }

    renderCheeses() {
        return (this.props.cheeses.map((cheese, index) => (
            <li key={index}>
                {cheese}
            </li>
        )));
    }

    render() {
        return (
            <ul>
                {this.renderCheeses()}
            </ul>
        );
    }

}

const mapStateToProps = state => ({
    // console.log(state.cheeseReducer.cheeses)
    cheeses: state.cheeseReducer.cheeses
});


export default connect(mapStateToProps)(CheeseList);

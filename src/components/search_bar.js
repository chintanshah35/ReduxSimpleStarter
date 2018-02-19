import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state={ term: 'Search Here'};
    }

    render(){

       //return <input onChange={this.onInputChange} />; method 1
       //return <input onChange={(event) => console.log(event.target.value)} />;method 2
        return(<div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.setState({term: event.target.value})} /><br/>
                Value of the input: {this.state.term}
            </div>
    );
   }

  /* onInputChange(event){
        console.log(event.target.value);
    } method 1*/
}

export default SearchBar;

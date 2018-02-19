//Create a new component
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY= 'AIzaSyCmOcbtpV2BCASgf1Z8mIHJxU7pySMqKxM';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

//This component should produce some html
const App = ()=>{
    return (<div>
                <SearchBar />
            </div>
    );
}

//Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));

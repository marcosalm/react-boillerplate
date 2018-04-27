import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { connect } from "react-redux";

import Articles from './Articles'
import Form from  './Form';
import service from '../services/service';
const mapStateToProps = state => {
    return { articles: state.articles };
};

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)



const Forms = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form msg={'dados via props!'} add1={'Variavel adicionada no props.'} add2={'variavel 2'}/>
        </div>
    </div>
)

const Art = () =>( <Articles/>);

class container extends Component{

   render(){
        return (<Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/newarticles">New Articles</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/articles" component={Art}/>
                <Route path="/newarticles" component={Forms}/>
            </div>
        </Router>);
    }
}

let App = connect(mapStateToProps, {service})(container);
export default App;

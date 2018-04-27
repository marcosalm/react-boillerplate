import service from "../services/service";
import React, { Component } from "react";
import {connect} from "react-redux";
import List from './List';

class posts extends Component {

    componentDidMount(){
         this.props.service()
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Articles</h2>
                    <List />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

const Articles = connect(mapStateToProps, {service})(posts);

export default Articles;

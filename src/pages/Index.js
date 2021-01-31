import React from 'react';
import '../css/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/popper.js/dist/umd/popper';
import { Link } from "react-router-dom";
import Menu from '../components/menu';
import Container from '../components/container';
import MainArticle from "../components/mainArticle";


class Index extends React.Component {
    state={
        categories:[],
        products:[],
        list:{}
    }

    componentDidMount() {
        fetch('https://dtv-projects.firebaseio.com/sections.json')
            .then(data => data.json())
            .then(products => {
                this.setState({
                    products
                })
            });

        fetch('https://dtv-projects.firebaseio.com/menu.json')
            .then(data => data.json())
            .then(categories => {
                this.setState({
                    categories
                })
            })
    }
    addRemoveFromList(url) {
        console.log("addRemove called",url,this);
        const list = this.state.list;
        list[url] ? delete list[url] : list[url] = true;
        this.setState({list});
    }

    render() {
        return (

            <div className="App">
                <div className="background">
                    <div className="gradient">
                    </div>
                </div>
                <Menu categories={this.state.categories}/>
                <Container products={this.state.products} list={this.state.list}
                addRemoveFromList={this.addRemoveFromList.bind(this)}/>

                </div>

        );
    }
}

export default Index;

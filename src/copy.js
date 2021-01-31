import React from 'react';
import '../css/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/popper.js/dist/umd/popper';
import { Link } from "react-router-dom";

class App extends React.Component {

    state = {
        products: [],
        list: {},
        categories: [],
    };
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
        fetch('https://dtv-projects.firebaseio.com/sections.json')
            .then(data => data.json())
            .then(products => {
                const product = products.find(x => x.id === 'movies');
                this.setState({
                    products: [...product.data]
                })
            });
    }


    addRemoveFromList(url) {
        const list = this.state.list;
        list[url] ? delete list[url] : list[url] = true;
        this.setState({list});
    }
    render() {
        return (

            <div className="App">


                <div  className="background">
                    <div className="gradient">
                    </div>
                </div>

                <div className="container">
                    <h4>LOREM IPSUM <br/><b>DOLOR SIT AMET </b></h4>
                    {this.state.products.map((section, index) => {
                        return (
                            <div className="section" key={index}>
                                <div className="baslık"><h3 id={section.id} className="content-title">{section.title}</h3></div>

                                <div className="row">
                                    {section.data.map(content => {
                                        return (
                                            <div key={content.url} className=" col-sm-6 col-md-4 col-lg-3">
                                                <div className="ban">
                                                    <img onError={(event => {
                                                        event.target.onerror = null;
                                                        event.target.src = "/assets/indir.png";
                                                        event.target.classList.add('error-class')
                                                    })} className={"img-fluid"} src={`/assets/${content.image}`} alt=""/>

                                                    <div className="popup">

                                                        <button onClick={() => this.addRemoveFromList(content.url)}
                                                                className="btn closebutton">
                                                            {this.state.list[content.url]
                                                                ? <i className="fa fa-times-circle fa-2x"/>
                                                                : <i className="fa fa-plus-circle fa-2x"/>}
                                                        </button>

                                                        <div className="cover">
                                                            <div className="image-detail">
                                                                <div>{content.title}</div>
                                                                <div>{content.subTitle}</div>
                                                                <b>{
                                                                    content.published_date && new Date(content.published_date).getFullYear()
                                                                }</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )})}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default App;

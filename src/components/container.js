import React from 'react';
import '../css/App.css';
import ContentWrapper from "./contentWrapper";
import MainArticle from './mainArticle';


class Container extends React.Component {
    render() {
        const {addRemoveFromList,list}=this.props;
        return (
            <div className="App">
                <div className="container"> ,
                    <MainArticle/>
                    {this.props.products.map(section => <ContentWrapper key={section.title} section={section} addRemoveFromList={addRemoveFromList} list={list}/>)}
                </div>
            </div>
        );
    }
}

export default Container;

import React from 'react';
import '../css/App.css';
import Product from './Product';


class ContentWrapper extends React.Component {


    render() {
        const {section, addRemoveFromList, list} = this.props;
        return (


            <div className="section" key={section.id}>
                <div className="baslık"><h3 id={section.id} className="content-title">{section.title}</h3></div>

                <div className="row">
                    {section.data.map(content => {
                        return (
                            <Product key={content.id} data={content} list={list} addRemoveFromList={addRemoveFromList}/>

                        )
                    })}
                </div>
            </div>
        )


    }
}

export default ContentWrapper;
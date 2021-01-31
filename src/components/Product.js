import React from 'react';


class Product extends  React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const {data,addRemoveFromList,list} = this.props;
        console.log("product",addRemoveFromList);
        return (
            <div  key={data.url} className=" col-sm-6 col-md-4 col-lg-3">
                <div className="ban">
                    <img onError={(event => {
                        event.target.onerror = null;
                        event.target.src = "/assets/indir.png";
                        event.target.classList.add('error-class')
                    })} className={"img-fluid"} src={`/assets/${data.image}`} alt=""/>

                    <div className="popup">
                        <button onClick={() => addRemoveFromList(data.url)}
                                className="btn closebutton">
                            {this.props.list[data.url] ? <i className="fa fa-times-circle fa-2x"/> : <i className="fa fa-plus-circle fa-2x"/>}
                        </button>

                        <div className="cover">
                            <div className="image-detail">
                                <div>{data.title}</div>
                                <div>{data.subTitle}</div>
                                <b>{
                                    data.published_date && new Date(data.published_date).getFullYear()
                                }</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
export default Product;

import React from 'react';
import Menu from "../components/menu";
import Container from "../components/container";


class Canliyayin extends React.Component{

    state={
        categories:[],
        products:[],
        list:{}
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
    }
    addRemoveFromList(url) {
        console.log("addRemove called",url,this);
        const list = this.state.list;
        list[url] ? delete list[url] : list[url] = true;
        this.setState({list});
    }
    render() {
        return(
            <div className="Canliyayin">
                <div  className="background">
                    <div className="gradient">
                    </div>
                </div>
                <Menu categories ={this.state.categories}/>
                <Container products={this.state.products} list={this.state.list}
                addRemoveFromList={this.addRemoveFromList.bind(this)}/>
            </div>
        )
    }
}
export default Canliyayin;

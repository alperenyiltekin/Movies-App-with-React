import React from 'react';
import '../css/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/popper.js/dist/umd/popper';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Film from "./Film";
import Index from "./Index";
import Cocuk from "./Cocuk";
import Dizi from "./Dizi";
import Canliyayin from "./Canliyayin";


class App extends React.Component {
    render() {
        return (

            <div className="App">
                <Router>
                        <Route path='/' exact component={Index}/>
                        <Route path='/filmler' component={Film}/>
                        <Route path='/diziler' component={Dizi}/>
                        <Route path='/cocuk' component={Cocuk}/>
                    <Route path='/canli-yayin' component={Canliyayin}/>
                </Router>
            </div>
                )
    }
}

export default App;

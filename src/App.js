import React, {Component} from 'react';
import './App.css';
import Search from './component/Search';
import SearchList from './component/searchList';
import SideList from './component/SideList';


class Appsss extends Component{

    constructor(props){
        super(props);
        this.state = {
            results:{},
            saved:[]
        };
    }

    updateState(data){
        this.setState({
            results : data
        });
    }

    updateSaved(name){
        this.setState({
            saved : this.state.saved.concat(name)
        })
    }

    render()
    {

        return (
            <div className="container">
                <div className="row">
                    <div  className="form-group col-8 col-md-8 col-xs-12 col-lg-8 " >

                        <Search updateState={this.updateState.bind(this)}/>

                        <SearchList updateSaved={this.updateSaved.bind(this)} searchPlaces={this.state.results}/>
                    </div>

                    <SideList saved={this.state.saved} />
                </div>
            </div>
        );
    }
}

 export default Appsss;


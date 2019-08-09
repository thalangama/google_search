import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
    getKey(e){
        const prop = this.props;
        e.preventDefault();
        axios.post('http://localhost:3001/getLocations',{
            city : this.refs.location.value
        }).then(function(data){
            prop.updateState(data.data.data);
        }).catch(function(error){
            console.log(error);
        })
    }
    
    render(){
        return (
            <form action="" method="POST" id="formYardRelease" name="formYardRelease">
                <h1>Search</h1>
                <div className="row">
                    <label className="col-md-4 col-xs-4 col-lg-4">
                        Location
                        <span className="mandatory">*</span>
                    </label>
                    <div className=" col-4 col-md-4 col-xs-4 col-lg-4">
                        <input className="form-control" id="location" ref="location"/>
                    </div>
                    <div className="col-4 col-md-4 col-xs-4 col-lg-4">
                        <button className="btn btn-primary" onClick={this.getKey.bind(this)}> Search </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search;
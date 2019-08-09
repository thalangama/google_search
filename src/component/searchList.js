import React,{Component} from 'react';

class SearchList extends Component {

    render (){

        if(this.props.searchPlaces.results !== undefined) {
            var myList = this.props.searchPlaces.results.map(val => {
                return(
                    <div className="row" key={val.id}>
                        searchPlaces                <div className="list-group">
                            <div className="list-group-item clearfix">
                                <div className="float-left">
                                    <div className="img-thumbnail">
                                        <img src={val.icon} />
                                    </div>
                                </div>
                                <div className="float-right">
                                    <h2>{val.name}</h2>
                                    <div className="text-info">
                                        <span>Address</span>{val.formatted_address}
                                    </div>
                                    <div className="text-info">
                                        <button className="btn-primary btn" onClick={() => this.props.updateSaved(val.name)}>Save Places</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })
        }

        return (
            <ul>
                {myList}
            </ul>
        )
    }
}

export default SearchList;
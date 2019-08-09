import React, {Component} from 'react';

class SlideList extends Component{


    render(){
        let savedList = '';
        console.log(this.props.saved);
        if(this.props.saved.length != 0){
             savedList = this.props.saved.map(namex => {
                return (
                    <div className="alert aleert-info" key={namex}>
                        <a href="#" className="btn btn-xs btn-primary pull-right">Click for More info</a>
                        <strong>{namex}</strong>
                    </div>
                )
            })
        }
        return (
            <div  className="col-4 col-md-4 col-xs-4 col-lg-4 " >
                <h2>Saved Places</h2>
                {savedList}
            </div>
        )
    }
}

export default SlideList;
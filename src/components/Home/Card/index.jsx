import React, {Fragment, Component} from 'react';
import CardView from './CardView';


class Cards extends Component {
    render(){
        return(
            <Fragment>
                <div className="justify-content-space-between mt-3">
                    <div style={{ display: "block", textAlign: "center"}}>
                        <div style={{ display: "inline-block" }} className="m-2">
                            <CardView/>
                        </div>
                        <div style={{display:"inline-block"}} className="m-2">
                            <CardView/>
                        </div>
                        <div style={{ display: "inline-block" }} className="m-2">
                            <CardView/>
                        </div>
                        <div style={{ display: "inline-block" }} className="m-2">
                            <CardView />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Cards 
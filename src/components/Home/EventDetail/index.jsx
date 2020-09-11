import React, { Fragment } from 'react';

const eventDetail = (props) => {
    const id = props.match.params.id
    return ( 
        <Fragment>
            <div>titre {id}</div>
            <div>description</div>
            <div>date</div>
            <div>ville</div>
            <div>quartier</div>
        </Fragment>
     );
}
 
export default eventDetail;
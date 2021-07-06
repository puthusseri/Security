import { useHistory } from "react-router-dom";

import React from 'react'

function RoutingComonent() {
const history = useHistory();

function handleClick() {
  history.push("/home");
}
    return (
        <div>
            <button type="button" onClick={handleClick}>
            Go home
            </button>
        </div>
    )
}

export default RoutingComonent;

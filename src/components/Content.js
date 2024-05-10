import React from "react";

function Content({ item }) {
    return (
        <div>{item?.id} {item?.name}</div>
    )
}

export default Content;
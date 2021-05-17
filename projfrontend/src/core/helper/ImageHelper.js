import React from "react";
const ImageHelper = ({product}) => {
    const imageurl = product
        ?   product.image
        : `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businessinsider.com%2Fcristiano-ronaldo-makes-hat-trick-history-with-juventus-triple-2020-1&psig=AOvVaw3nEjBYVcmMm9YPQsE4Twu6&ust=1601380796445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC8rM_mi-wCFQAAAAAdAAAAABAD`
    return (
        <div className = "rounded border border-success p-2">
            <img src ={imageurl} style={{maxHeight:"100%",maxWidth:"100%"}} className ="mb-3 rounded" alt =""/>

        </div>
    
    );
};
export default ImageHelper;
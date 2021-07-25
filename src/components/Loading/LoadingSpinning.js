import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({color}) => (
    <ReactLoading type="spinningBubbles" color={color} height={100} width={100} />
);
 
export default Loading;
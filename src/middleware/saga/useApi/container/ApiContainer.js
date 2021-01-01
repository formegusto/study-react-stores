import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../module/action';

function ApiContainer({store, getPost}){
    useEffect(() => {
        getPost(12);
    }, []);
    
    return (
        <>
        </>
    )
}

export default connect(
    state => ({store: state.api}),
    {
        getPost : getPost
    }
)(ApiContainer);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ThunkComponent from '../components/ThunkComponent';
import { getPost, getUsers} from '../modules/thunk.js';


function ThunkContainer({thunk, getPost, getUsers}){
    useEffect(() => {
        getPost(12);
    }, [getPost]);

    return (
        <ThunkComponent
            data={thunk} />
    );
}

export default connect(
    state => ({thunk: state.thunk}),
    { getPost, getUsers }
)(ThunkContainer);
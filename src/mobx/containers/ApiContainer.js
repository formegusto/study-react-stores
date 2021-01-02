import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';

function ApiContainer({store, fetchPost}) {
    useEffect(() => {
        fetchPost(12);

        console.log(store.post);
    }, []);

    return (
        <>
        </>
    );
}

export default inject(({ApiStore}) => ({
    store: ApiStore,
    fetchPost: ApiStore.fetchPost
}))(observer(ApiContainer));
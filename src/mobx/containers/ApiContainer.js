import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';

function ApiContainer({store, fetchPost}) {
    useEffect(() => {
        fetchPost(12);
    }, [fetchPost]);

    console.log(store);

    return (
        <>
            {store == null ?
                <div>
                    로딩중.
                </div>
                :
                <div>
                    {store.userId}
                </div>
            }
        </>
    );
}

export default inject(({ApiStore}) => ({
    store: ApiStore.post,
    fetchPost: ApiStore.fetchPost
}))(observer(ApiContainer));
import { getPostAPI } from "mobx/api/postApi";
import { observable, action } from "mobx";

class ApiStore{
    @observable
    post = null;

    @action
    fetchPost = (id) => {
        this.post = null;

        getPostAPI(id).then(this.fetchPostSuccess, this.fetchPostFailure);
    }

    @action.bound
    fetchPostSuccess = (response) => {
        this.post = response.data;
    }

    @action.bound
    fetchPostFailure = (error) => {
        this.post = error;
    }
}

export default ApiStore;
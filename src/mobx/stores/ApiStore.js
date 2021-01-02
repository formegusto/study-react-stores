import { getPostAPI } from "mobx/api/postApi";
import { observable, action, runInAction } from "mobx";

class ApiStore{
    @observable
    post = null;

    @action
    fetchPost = (id) => {
        this.post = null;

        getPostAPI(id).then(
            response => {
                runInAction(() => {
                    this.post = response.data
                })
            },
            error => {
                runInAction(() => {
                    this.post = error
                });
            }
        );
    }
}

export default ApiStore;
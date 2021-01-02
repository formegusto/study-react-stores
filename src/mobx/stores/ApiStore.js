import { getPostAPI } from "mobx/api/postApi";
import { observable, action } from "mobx";
import BaseStore from './BaseStore';

class ApiStore extends BaseStore{
    @observable
    post = [];

    @action
    fetchPost = (id) => {
        this._init("FETCH_POST");
        this.post = null;

        getPostAPI(id).then(
            response => {
                this.post = response.data;
                this._success["FETCH_POST"] = true;
                this._pending["FETCH_POST"] = false;
            },
            error => {
                this._failure["FETCH_POST"] = [true, error];
                this._pending["FETCH_POST"] = false;
            }
        )
    }
}

export default ApiStore;
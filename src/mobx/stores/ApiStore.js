import { getPostAPI } from "mobx/api/postApi";
import { observable, action, runInAction, flow } from "mobx";

class ApiStore{
    @observable post = null;

    fetchPost = flow(function * (id) {
        this.post = null;

        try{
            const response = yield getPostAPI(id);

            this.post = response.data;
        } catch(error) {
            this.post = error; 
        }
    }).bind(this);
}

export default ApiStore;
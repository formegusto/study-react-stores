import { observable } from "mobx";

class BaseStore {
    @observable
    _pending = {};

    @observable
    _success = {};

    @observable
    _failure = {};

    _init = (key) => {
        this._pending[key] = true;
        this._success[key] = false;
        this._failure[key] = [false, null];
    }

    get pending() {
        return this._pending;
    }

    get success() {
        return this._success;
    }

    get failure() {
        return this._failure;
    }
}

export default BaseStore;
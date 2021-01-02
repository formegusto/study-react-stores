import ApiStore from './ApiStore';
import BaseStore from './BaseStore';
import CounterStore from './CounterStore';

class RootStore {
    BaseStore;
    counterStore;
    ApiStore;

    constructor() {
        this.counterStore = new CounterStore();
        this.ApiStore = new ApiStore();
        this.BaseStore = new BaseStore();
    }
}

export default RootStore;
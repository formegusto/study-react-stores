import CounterStore from './CounterStore';

class RootStore {
    counterStore;

    constructor() {
        this.counterStore = new CounterStore();
    }
}

export default RootStore;
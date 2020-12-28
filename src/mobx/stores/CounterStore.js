import { action, observable } from "mobx";

class CounterStore {
    root;

    constructor(root) {
        this.root = root;
    }

    @observable
    count = 0;

    @action
    increase = () => {
        this.count += 1;
    }

    @action
    decrease = () => {
        this.count -= 1;
    }
}

export default CounterStore;
import { action, decorate, observable } from "mobx";

class CounterStore {
    // @observable
    count = 0;

    // @action
    increase = () => {
        this.count += 1;
    }

    // @action
    decrease = () => {
        this.count -= 1;
    }
}

decorate(CounterStore,{
    count: observable,
    increase: action,
    decrease: action,
});

export default CounterStore;
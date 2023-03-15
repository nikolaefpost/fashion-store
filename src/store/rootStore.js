import {OrderData} from "./orderData";
import {UserData} from "./userData";

export class RootStore {
    constructor() {
        this.orderStore = new OrderData(this)
        this.userStore = new UserData(this)
    }
}

export default new RootStore;
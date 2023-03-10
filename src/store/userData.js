import {makeAutoObservable} from "mobx";


export class UserData {
    user = {}
    storage = window.localStorage;

    constructor() {
        // makeObservable(this, {
        //     order: observable,
        //     setProducts: action,
        //     getProducts: action,
        //     changeCnt: action,
        //     deleteProduct: action,
        //     total: computed
        //
        // })
        makeAutoObservable(this)
    }

    handleSetUser = (user) => {
        this.user = user
        this.storage.setItem("currentUser", JSON.stringify(user));
    }

    deleteUser = () => {
        this.user = {}
        this.storage.currentUser = null;
    }

    getUserStorage = () =>{
        if (this.storage.getItem("currentUser")) {
            this.user = JSON.parse(this.storage.getItem("currentUser"));
        }
    }
}

const currentUser = new UserData();
currentUser.getUserStorage();
export default currentUser
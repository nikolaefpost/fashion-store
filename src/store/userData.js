import {makeAutoObservable} from "mobx";
// import rootStore from "../context/rootStore";


export class UserData {
    user = {}
    storage = window.localStorage;

    constructor(rootStore) {
        // makeObservable(this, {
        //     order: observable,
        //     setProducts: action,
        //     getProducts: action,
        //     changeCnt: action,
        //     deleteProduct: action,
        //     total: computed
        //
        // })
        makeAutoObservable(this,{ rootStore: false })
        this.rootStore = rootStore
        this.getUserStorage()
        // this.rootStore = rootStore
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

// const currentUser = new UserData();
// export default currentUser
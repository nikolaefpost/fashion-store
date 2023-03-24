import {makeAutoObservable} from "mobx";

// import rootStore from "../context/rootStore";


export class UserData {
    user = {}
    authUser = false
    form = [
        {field: "email", name: "Ваш e-mail*", type: "text"},
        {field: "password", name: "Ваш пароль*", type: "password"},
    ];
    formStep2 = [{field: "code", name: "Код с e-mail*", type: "text"}]
    storage = window.localStorage;
    subscriptEmail = {}
    recoveryEmail = {}

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
        makeAutoObservable(this, {rootStore: false})
        this.rootStore = rootStore
        this.getUserStorage()
        // this.rootStore = rootStore
    }

    handleSetUser = (user) => {
        console.log(user)
        this.user = user
        this.storage.setItem("currentUser", JSON.stringify(user));
    }

    handleAuthUser = (user) => {
        if (this.user.email !== user.email) return {message: "пользователь с данным e-mail не зарегестрирован", flag: false}
        if (this.user.password !== user.password) return {message: "пароль введен не верно", flag: false}
        return {message: "", flag: true}
    }

    handleSetRecoveryEmail = (email) =>{
        this.recoveryEmail = email
    }

    handleSetSubscriptEmail = (email) => {
        this.subscriptEmail = email
    }

    deleteUser = () => {
        this.user = {}
        this.storage.currentUser = null;
    }

    getUserStorage = () => {
        if (this.storage.getItem("currentUser")) {
            this.user = JSON.parse(this.storage.getItem("currentUser"));
        }
    }
}

// const currentUser = new UserData();
// export default currentUser
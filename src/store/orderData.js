import {
    makeAutoObservable,
    configure,
} from "mobx";
configure({ enforceActions: 'observed' })


export class OrderData {
    order = [];


    constructor(rootStore) {

        makeAutoObservable(this,{ rootStore: false })
        this.rootStore = rootStore
    }


    setProducts = (apiData) => {
        this.order = apiData
    }



    // getProducts = () => {
    //     this.isLoading = true;
    //         this.employeeService.getEmployees().then((data) => {
    //             runInAction(() => {
    //                 this.setProducts(data);
    //                 this.isLoading = false;
    //             })
    //         })
    // }

    // *getProductsFlow(){
    //     this.isLoading = true;
    //     const order = yield this.employeeService.getEmployeesAsyncAwait(apiProdUrl);
    //     const category = yield this.employeeService.getEmployeesAsyncAwait(apiCategUrl);
    //     this.setProducts(order);
    //     this.setCategory(category);
    //     this.isLoading = false;
    // }
    //
    //
    // get total() {
    //     let count = 0;
    //     let sum = this.order.reduce((acc, cur) => {
    //         if (cur.cmt>0) count++;
    //          return acc + cur.cmt * cur.price;
    //     }, 0).toFixed(2)
    //     return {sum, count}
    // }
    //
    //
    // changeCnt = (id, cmt) => {
    //     let product = this.order.find(pr => pr.id === id);
    //     if (product) product.cmt = cmt;
    // }
    //
    // deleteProduct = (id) => {
    //     this.order = this.order.filter(item => item.id !== id)
    // }
}

// const data = new OrderData();
// export default data;
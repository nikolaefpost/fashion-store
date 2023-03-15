import {
    action,
    makeAutoObservable,
    observable,
    runInAction,
    makeObservable,
    configure,
    computed,
    autorun
} from "mobx";
configure({ enforceActions: 'observed' })




const apiProdUrl = 'https://fakestoreapi.com/products'
const apiCategUrl = 'https://fakestoreapi.com/products/categories'

class EmployeeService {
    getEmployees = (apiUrl) => {
        return fetch(apiUrl).then((response) => response.json()).catch(err => {
            console.log(err)
            return []
        })
    }

    getEmployeesAsyncAwait = async (apiUrl) => {
        try{
            const response = await fetch(apiUrl)
            return await response.json()
        }catch (e){
            console.log(e)
            return []
        }
    }
}


export class OrderData {
    order = [];
    category=[];
    isLoading = true

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
        this.employeeService = new EmployeeService()
        this.getProductsFlow()
    }


    setProducts = (apiData) => {
        this.order = apiData.map(item=>({...item, cmt: 0}))
    }

    setCategory = (apiData) => {
        this.category = apiData
    }

    getProducts = () => {
        this.isLoading = true;
            this.employeeService.getEmployees().then((data) => {
                runInAction(() => {
                    this.setProducts(data);
                    this.isLoading = false;
                })
            })
    }

    *getProductsFlow(){
        this.isLoading = true;
        const order = yield this.employeeService.getEmployeesAsyncAwait(apiProdUrl);
        const category = yield this.employeeService.getEmployeesAsyncAwait(apiCategUrl);
        this.setProducts(order);
        this.setCategory(category);
        this.isLoading = false;
    }


    get total() {
        let count = 0;
        let sum = this.order.reduce((acc, cur) => {
            if (cur.cmt>0) count++;
             return acc + cur.cmt * cur.price;
        }, 0).toFixed(2)
        return {sum, count}
    }

    // get total() {
    //     let count = 0;
    //     let sum = this.order.reduce((acc, cur) => {
    //         if (cur.cmt>0) count++;
    //         return acc + cur.cmt * cur.price;
    //     }, 0).toFixed(2)
    //     return {sum, count}
    // }

    changeCnt = (id, cmt) => {
        let product = this.order.find(pr => pr.id === id);
        if (product) product.cmt = cmt;
    }

    deleteProduct = (id) => {
        this.order = this.order.filter(item => item.id !== id)
    }
}

// const data = new OrderData();
// export default data;
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




const apiUrl = 'https://fakestoreapi.com/products'

class EmployeeService {
    getEmployees = () => {
        return fetch(apiUrl).then((response) => response.json()).catch(err => {
            console.log(err)
            return []
        })
    }

    getEmployeesAsyncAwait = async () => {
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
        this.order = apiData.map(item=>({...item, cmt: 1}))
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
        const order = yield this.employeeService.getEmployeesAsyncAwait();
        this.setProducts(order);
        this.isLoading = false;
    }

    get total() {
        return this.order.reduce((acc, cur) => acc + cur.cmt * cur.price, 0).toFixed(2)
    }

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
import {
    action,
    makeAutoObservable,
    observable,
    runInAction,
    makeObservable,
    configure,
    computed
} from "mobx";
configure({ enforceActions: 'observed' })




const apiUrl = 'https://fakestoreapi.com/products'

class EmployeeService {
    getEmployees = () => {
        return fetch(apiUrl).then((response) => response.json())
    }

    getEmployeesAsyncAwait = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    }
}


export class OrderData {
    order = [];

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
        this.employeeService = new EmployeeService()
    }


    setProducts = (apiData) => {
        this.order = apiData.map(item=>({...item, cmt: 1}))
    }

    getProducts = () => {
        this.employeeService.getEmployees().then((data) => {
            runInAction(() => {
                this.setProducts(data)
            })
        })
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

const data = new OrderData();
data.getProducts()
export default data;
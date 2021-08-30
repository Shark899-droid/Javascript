const app = Vue.createApp({
    data() {
        return {
            isActive: false,
            cakes: [
                {img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=947&q=80", price: "$10.99" },
                {img: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80", price: "$15.99" },
                {img: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=800", price: "$18.99" },
                {img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80", price: "$5.99" },
                {img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80",price:"$20.99"},
            ],
        }
    },
    methods: {
        showModal() {
          
            this.isActive = !this.isActive
        },
        clearCart() {
            this.cakes = []
        },
        checkOut() {
            alert("to Checkout")
        },
        deleteItem(index) {
            this.cakes.splice(index,1);
            if (this.cakes.length === 0) {
                this.isActive = false;
            }
        }
    },
    computed: {
        calculatePrice() {
            
            let prices = []
            let priceswidtout = []
            let sum = 0
            for (let i = 0; i < this.cakes.length; i++){
                prices.push(this.cakes[i].price)
            }
            
            for (let i = 0; i < prices.length; i++){
                let sliced = prices[i].slice(1);
                priceswidtout.push(sliced)
            }
            
            for (let i = 0; i < priceswidtout.length; i++){
                sum += parseFloat(priceswidtout[i]);
            }
            
            return sum.toFixed(2)
            
            
            
            
        },
        itemsCount(){
            if(this.cakes.length < 2){
                return this.cakes.length + " Item"
            }else{
                 return this.cakes.length + " Items"
        }
        
        },
    }
})
app.mount("#app")
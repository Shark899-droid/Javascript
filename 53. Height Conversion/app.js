const app = Vue.createApp({
    data() {
        return {
            inches: 0,
            feet: 0,
            cm: 12,
            isVisible:false
        }
    },
    methods: {
        convert() {
            const feet = parseInt(this.$refs["feet"].value) * 30.48
            const inches = parseInt(this.$refs["inches"].value) * 2.54
            this.cm = feet + inches;
            this.isVisible = true;
        }
    }
})

app.mount("#app")
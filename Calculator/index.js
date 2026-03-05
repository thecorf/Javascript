Vue.createApp({

    data() {

        return {

            number1: null,
            number2: null,
            result: null

        }

    },

    methods: {
        calculate() {
            switch(this.operation) {
                case "add":
                    this.result = parseFloat(this.number1) + parseFloat(this.number2)
                    break
                case "subtract":
                    this.result = parseFloat(this.number1) - parseFloat(this.number2)
                    break
                case "multiply":
                    this.result = parseFloat(this.number1) * parseFloat(this.number2)
                    break
                case "divide":
                    this.result = parseFloat(this.number1) / parseFloat(this.number2)
                    break
            }
        }

    }

}).mount("#app")
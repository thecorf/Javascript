Vue.createApp({

    data() {

        return {
            task: null,
            tasks : [],
            message: null,
        }

    },

    methods: {

        addWord(word) {
            this.tasks.push(word)
        },
        printWords() {
            this.message = this.tasks
        },
        clearwords() {
            this.tasks = []
        }
    }

}).mount("#app")
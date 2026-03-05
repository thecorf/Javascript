Vue.createApp({

    data() {

        return {
            word: null,
            words: [],
            message: null,
        }

    },

    methods: {

        addWord(word) {
            this.words.push(word)
        },
        printWords() {
            this.message = this.words.join(", ")
        },
        clearwords() {
            this.words = []
        }
    }

}).mount("#app")
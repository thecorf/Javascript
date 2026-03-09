const baseUri = "https://api.fbi.gov/wanted/v1/list"

Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            userId: "",
            currentPage: 1,  // Add this for pagination tracking
            jumpToPageNumber: null  // Add this for jump input
        }
    },
    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded    
        console.log("created method called")
        this.getPosts(this.currentPage)
    },
    methods: {
        async getPosts(page) {
            try {   
                const uri = `${baseUri}?page=${page}`  // Append page query param
                const response = await axios.get(uri)
                this.posts = await response.data
                this.error = null
                console.log(this.posts)
            } catch (ex) { // non 2xx status code or no connection to server
                this.posts = []
                this.error = ex.message
            }
        },
        nextPage() {
            // Assuming 20 items per page (API default); adjust if needed
            const itemsPerPage = 20
            const maxPages = Math.ceil(this.posts.total / itemsPerPage)
            if (this.currentPage < maxPages) {
                this.currentPage++
                this.getPosts(this.currentPage)
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--
                this.getPosts(this.currentPage)
            }
        },
        cleanList() {
            this.posts = []
            this.error = null
            this.currentPage = 1  // Reset page on clean
        },
        jumpToPage() {
            const pageNum = this.jumpToPageNumber
            const itemsPerPage = 20
            const maxPages = Math.ceil(this.posts.total / itemsPerPage)
            
            if (pageNum && pageNum >= 1 && pageNum <= maxPages) {
                this.currentPage = pageNum
                this.getPosts(this.currentPage)
                this.jumpToPageNumber = null  // Clear input after jump
            } else {
                this.error = `Please enter a valid page number (1-${maxPages})`
            }
        },
    }
}).mount("#app")
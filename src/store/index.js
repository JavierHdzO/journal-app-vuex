
import { createStore } from "vuex"

/** Journal Module Store */
import journal from "@/modules/dayBook/store/journal"
import auth from "@/modules/auth/store"

export default createStore({
    modules: {
        journal,
        auth
    }
})
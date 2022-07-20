
import { createStore } from "vuex"

/** Journal Module Store */
import journal from "@/modules/dayBook/store/journal"

export default createStore({
    modules: {
        journal
    }
})
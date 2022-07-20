

import state from "./state"
import * as getter from "./getters"
import * as actions from "./actions"
import * as mutations from "./mutations"

const journalModule = {
    namespaced: true,
    actions,
    getter,
    mutations,
    state
}

export default journalModule
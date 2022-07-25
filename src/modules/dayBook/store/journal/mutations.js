

// export const myAcction =  ( state ) => {

// }
export const isLoading = ( state ) => {
    state.isLoading = true
}

export const setEntries =  ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}

export const updateEntry =  ( state, entryUpDate ) => {

    const ids = state.entries.map( e => e.id ).indexOf( entryUpDate.id )

    state.entries[ids] = entryUpDate
}

export const addEntry =  ( state, entry ) => {

    state.entries.unshift(entry)
}

export const deleteEntry = ( state, id) => {
    state.entries = state.entries.filter( entry => entry.id !== id )
}



// export const myGetter = ( state ) => {

//     return state.something
// }


export const getEntriesByTerm = ( state ) => ( term = '' ) => {

    return term.length === 0
                ? state.entries
                : state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntriesById = ( state  ) => ( id ) => {

    const entry =  state.entries.find( entry => entry.id === id)

    if ( !entry ) return;

    return {...entry}
}

export const getIsLoading = ( state ) => {
    return state.isLoading
}

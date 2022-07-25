
// export const myAcction = async ( {commit} ) => {

// }

import journalAPI from "@/api/journalApi"


export const loadEntries = async ( { commit } ) => {
    const { data } = await journalAPI.get('/entries.json')
    const entries = []

    if( !data ) {
        commit('setEntries', entries) 
        return
    }

    for(let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit('isLoading')
    commit('setEntries', entries)

    

}

export const updateEntry = async ( { commit }, entry) => {

    const { id, text, date, picture } = entry

    const rest = { text, date, picture}

    const { data } = await journalAPI.put(`/entries/${ id }.json`, {
        ...rest
    })

    data.id = id


    commit('updateEntry', {...data} )

}

export const createEntry = async ( { commit }, entry ) => {

    const { text, date, picture } = entry
    const rest = { text, date, picture }

    const { data } =await journalAPI.post('/entries.json', rest)

    if(!data.name) return;

    rest.id = data.name

    commit('addEntry', { 
        ...rest
    })

    return rest.id
}

export const deleteEntry = async ( { commit }, id ) => {
    await journalAPI.delete(`/entries/${ id }.json`)

    commit('deleteEntry', id)
}
import { createStore } from 'vuex'

import journal from "@/modules/dayBook/store/journal"
import { journalState } from '../../../../mockData/test-journal-state'


const createVuexStore = ( initialState ) => createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialState }
        }
    }
})

describe('Vuex - Tests in journal Module', () => {
    let store = null
    beforeEach(() => {
        store = null
    })

    test('init state, this one should be like above showing', () => {
         store = createVuexStore( journalState )

        const { isLoading, entries} = store.state.journal

        expect( isLoading ).toBe(false)
        expect( entries ).toEqual( journalState.entries )
    })



    //Mutations 

    test('mutation: setEntries', () => {
        store = createVuexStore( { isLoading: true, entries:[]} )

        store.commit('journal/setEntries', journalState.entries)

        expect( store.state.journal.entries.length ).toBe( 2 )

        expect( store.state.journal.isLoading ).toBe( false )

    })


    test('mutation: updateEntry', () => {
         store = createVuexStore( journalState )

        const updatedEntry = {
            id: '-N7qsyg_fYw_A8e5-g9t',
            date: 1658778269257,
            text: "Esta es la segunda entrada",
            picture: "https://res.cloudinary.com/fcojavierhdzor/image/upload/v1658778282/okvqqhzaun9hzgjraxsn.png"

        }

        store.commit('journal/updateEntry',  updatedEntry )


        expect( store.state.journal.entries.length ).toBe( 2 )
        expect( store.state.journal.entries.find(  e => e.id === updatedEntry.id) ).toEqual( updatedEntry )
       // expect( store.state.journal.isLoading ).toBe( false )

    })

    test('mutation: addEntry and deleteEntry', () => {
         store = createVuexStore( journalState )

        const entry = {
            id:'ABC-123',
            text: 'Hola mundo'
        }

        store.commit('journal/addEntry', {...entry})

        expect( store.state.journal.entries.length).toBe(3)
        expect( store.state.journal.entries.find( e => e.id === 'ABC-123') ).toEqual(entry)

        store.commit('journal/deleteEntry', entry.id)
        
        // console.log( store.state.journal.entries )
        expect( store.state.journal.entries.length ).toBe( 2 )
        expect( store.state.journal.entries.includes( entry )).toBeFalsy()
        expect( store.state.journal.entries.find( e => e.id === 'ABC-123' ) ).toBe( undefined )
        // console.log( store.state.journal.entries);

    })


    /** Getters  */

    test('getters: getEntriesByTerm, getEntriesById, getIsLoading', () => {

        
        store = createVuexStore( journalState )

        const [ ,entry1, entry2] = store.state.journal.entries

        const entr = store.getters['journal/getEntriesByTerm']('')
        expect( entr.length).toBe( 3 )
        
        const entr2 = store.getters['journal/getEntriesByTerm']('data')
        expect( entr2.length).toBe( 1 )

        const entr3 = store.getters['journal/getEntriesById']('-N7qsuUbH3bR-xVqhrrj')

        expect( entr3 ).toEqual(entry1)


    })

    /** Actions */

    test('action: loadEntries', async() => {

        store = createVuexStore( { isLoading: true, entries:[] })

        await store.dispatch('journal/loadEntries')

        expect(store.state.journal.entries.length).toBe(3)
    })

    test('action: updateEntry', async() => {

        store = createVuexStore( journalState )

        const updatedEntry = {
            id: '-N7qsuUbH3bR-xVqhrrj',
            date: 1627077227978,
            text: "Entry updated",
            otroCampo: false
        }

        await store.dispatch('journal/updateEntry', updatedEntry)

        expect(store.state.journal.entries.length).toBe(3)

        expect(
            store.state.journal.entries.find( e => e.id === updatedEntry.id ) 
        ).toEqual( {
            id: '-N7qsuUbH3bR-xVqhrrj',
            date: 1627077227978,
            text: "Entry updated"
        })

    })

    test('actions: createEntry and deleteEntry', async() => {
        store = createVuexStore( journalState )

         /** createEntry */
        const newEntry = {
            date: 1658778269257,
            text: 'test new Entry'
        }

        const idEntry = await store.dispatch('journal/createEntry', newEntry)

        expect( typeof idEntry   ).toBe( 'string' )

        newEntry.id = idEntry
        expect( store.state.journal.entries.find( e => e.id === idEntry) ).toEqual( newEntry )
        
        /** deleteEntry */
        await store.dispatch('journal/deleteEntry', newEntry.id)

        expect( store.state.journal.entries.find( e => e.id === idEntry) ).toBe( undefined )


    })

})
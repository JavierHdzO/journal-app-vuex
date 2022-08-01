import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import journal from '@/modules/dayBook/store/journal'
import EntryList from '@/modules/dayBook/Components/EntryList'
import { journalState } from "../../../mockData/test-journal-state"


const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal:{
                ...journal,
                state: { ...initialState }
            }
        }
    })


describe('Test in EntryList', () => {

    const store = createVuexStore( journalState  )
    const mockRouter = {
        push: jest.fn()
    }

    let wrapper = null 

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount( EntryList, {
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    })

    test('should call getEntriesByTerm without term and show 2 entries', () => {
        expect( wrapper.findAll('entry-stub').length).toBe(2)

    })

    test('should call getEntriesByTerm   and filter entries', async() => {
        const input = wrapper.find('input')

        await input.setValue('desde')

        expect( wrapper.findAll('entry-stub').length).toBe(1)


    })

    test('Boton should redirect to /new', async() => {
        
        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalledWith({name:'entry', params:{id:'new'}})


    })
})
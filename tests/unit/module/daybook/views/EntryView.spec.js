import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import Swal from 'sweetalert2'

import journal from '@/modules/dayBook/store/journal'
import { journalState } from "../../../mockData/test-journal-state"

import EntryView from '@/modules/dayBook/views/EntryView.vue'

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })


jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('Test in EntryView', () => {

    const store = createVuexStore( journalState  )
    store.dispatch = jest.fn()

    const mockRouter = {
        push: jest.fn()
    }

    let wrapper = null 

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount( EntryView, {
            props:{
                id:'-N7qsyg_fYw_A8e5-g9t'
            },
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    })


    test('Should redirect the user because the id does not exist', () => {
        const wrapper = shallowMount( EntryView, {
            props:{
                id:'Este ID no existe en el store'
            },
            global:{
                mocks:{
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })

        expect(  mockRouter.push ).toHaveBeenCalledWith({ name: "no-entry" })

    })

    test('should show full view', () => {
        expect( wrapper.html() ).toMatchSnapshot()
        expect(  mockRouter.push ).not.toHaveBeenCalled()
    })


    test('Should delete entry and exit', ( ) => {


        Swal.fire.mockReturnValueOnce(  Promise.resolve( {isConfirmed: true} ) )
        wrapper.find('.btn-danger').trigger('click')


        expect( Swal.fire ).toHaveBeenCalledWith({
            title:'Are you sure?',
            text: 'Once deleting will not recovery',
            showDenyButton: true,
            confirmButtonText:"Yes, I'm sure"
          })

        setTimeout( () => {
            expect( store.dispatch ).toHaveBeenCalledWith('journal/deleteEntry', "-N7qsyg_fYw_A8e5-g9t")
            expect( mockRouter.push ).toHaveBeenCalled()
        }, 1 )


    })

})
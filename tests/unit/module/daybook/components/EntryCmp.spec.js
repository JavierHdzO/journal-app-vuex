import { shallowMount } from "@vue/test-utils";
import Entry from '@/modules/dayBook/Components/EntryCmp'
import {journalState} from '../../../mockData/test-journal-state'

describe('tests about Entry Component', () => {
    const mockRouter = {
        push: jest.fn()
    }



    let wrapper = null
    beforeEach(()=> {
        wrapper = shallowMount(Entry, {
            props:{
                entry: journalState.entries[0]
            },

            global: {
                mocks:{
                    $router: mockRouter
                }
            }
        })
    })

    test('should do match with snap shot', () => {
         expect( wrapper.html()).toMatchSnapshot()

    })

    test('should redirect to do click above Entry-Container', () => {
        const btn = wrapper.find('#btnEntryComp')
        
        btn.trigger('click')

        expect( mockRouter.push ).toHaveBeenCalledWith({
            name: 'entry',
            params: {
                id: journalState.entries[0].id
            }
        })
    })


    test('test in computed properties', () => {
        expect( wrapper.vm.day ).toBe(23)
        expect( wrapper.vm.months ).toBe('Julio')
        expect( wrapper.vm.yearDay ).toBe('2021, Viernes')
    })



})
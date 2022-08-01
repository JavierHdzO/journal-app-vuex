import { shallowMount } from "@vue/test-utils";
import HomeVue from '@/views/HomeVue'

describe(" HomeVue Component", ()=>{
    test('', ()=>{
        const wrapper = shallowMount(HomeVue)

        expect( wrapper ).toMatchSnapshot()
    })

    test('To do click a button must redirect to no-entry', ()=>{
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(HomeVue, {
            global: {
                mocks:{
                    $router:mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })


    })
})
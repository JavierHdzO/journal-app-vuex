import fab from '@/modules/dayBook/Components/FloatingAcBtn'
import { shallowMount } from '@vue/test-utils'

describe('Testing inFAB Component', ()=>{

    // test('Should match with snap shot', () => {

    // })

    test('Should show default icon', () => {
        const wrapper = shallowMount(fab)

        const i = wrapper.find('i').classes()

        expect(i[2]).toBe('fa-plus')

    })

    test('Should show fa-save icon', () => {
        const wrapper = shallowMount(fab, {
            props:{
                icon:'fa-save'
            }
        })

        const i = wrapper.find('i').classes()
        expect(i).toContain('fa-save')
    })

    test('Should emit on:click event when it click in the fab', () => {
        const wrapper = shallowMount(fab)

        const button = wrapper.find('button')
        button.trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })



})



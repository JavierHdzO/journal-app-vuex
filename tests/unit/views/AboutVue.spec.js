
import { shallowMount } from "@vue/test-utils";
import AboutVue from '@/views/AboutVue.vue'

describe('AboutVue Component', () => {


    test('should match snapshot ', () =>{
        const wrapper = shallowMount(AboutVue);

        expect( wrapper.html()).toMatchSnapshot() 
    })
})

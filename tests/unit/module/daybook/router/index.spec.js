import daybookrouter from '@/modules/dayBook/router'

describe("Tests in Daybook's router ", () => {

    test("Router should be this settings", async() => {

        expect(daybookrouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component:expect.any(Function),
                },
                {
                    path: ":id",
                    name: "entry",
                    component: expect.any(Function),
                    props: expect.any(Function),
                }
            ]
        })

        const promiseRoutes = []
        daybookrouter.children.forEach( child => promiseRoutes.push( child.component() ))
        
        const routes = await (await Promise.all( promiseRoutes )).map ( r => r.default.name ) 

        expect( routes ).toContain('NoEntrySelected')
        expect( routes ).toContain('EntryView')
    }) 
    
    test("should return router's id", () => {
        const route = {
            params: {
                id: "ABC-123"
            }
        }

        // expect( daybookrouter.children[1].props( route ) ).toEqual( { id: 'ABC-123' } )

        const entryRoute = daybookrouter.children.find( route => route.name === 'entry' )

        expect( entryRoute.props( route ) ).toEqual({ id: 'ABC-123' })
    })

})
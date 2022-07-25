

export default {
    
    name: 'daybook',
    component: () => import ( /* webpackChunkName: 'Daybook Layout'*/'@/modules/dayBook/layouts/DayBookLayout'),
    children: [
        {
            path:'',
            name: 'no-entry',
            component: () => import ( /* webpackChunkName: 'No Entry Selected'*/'@/modules/dayBook/views/NotEntrySelected.vue'),
        }, 
        {
            path:":id",
            name: "entry",
            component: () =>  import ( /* webpackChunkName: 'No Entry Selected'*/'@/modules/dayBook/views/EntryView.vue'),
            props:( route )=>{
                return {
                    id: route.params.id
                }
            }
        }
    ]
}
// window.setImmediate = window.setTimeout
// import cloudinary from 'cloudinary'
import axios from "axios"


import uploadImage from "@/modules/dayBook/helpers/uploadImage";


// cloudinary.config({
//     cloud_name:     'fcojavierhdzor',
//     api_key:        '397172849499639',
//     api_secret:     'wFWCTDc-8sHg8JKG_NyGVHHNhE0'
// })

describe('Tests in uploadImage', () => {

    test('Should upload a file and return a url',  async() => {
        const { data } = await axios.get('https://res.cloudinary.com/fcojavierhdzor/image/upload/v1658778282/okvqqhzaun9hzgjraxsn.png', {
            responseType: 'arraybuffer'
        })

        const file = new File( [data],'foto.jpg' )

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')

        //Take id

        const segments = url.split('/')
        
        
    })
})
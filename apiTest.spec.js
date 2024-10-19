const {test, expect} = require ('@playwright/test')
const { Ajv } = require ('ajv');

const ajv = new Ajv();
var userid;

test('GET Request', async ({request}) => {
    const response = await request.get ('https://reqres.in/api/users?page=2')
     expect(response.status()).toBe(200)
     console.log (await response.json())
})
test('POST Request', async ({request}) => {

    const response = await request.post ('https://reqres.in/api/users',
      {data:{"name": "morpheus","job": "leader"},
       headers:{"Accept":"application/json"}
});
        console.log(await response.json())
        expect (response.status()).toBe(201)

    var res=await response.json()
    userid=res.id
})
test('UPDATE Request', async ({request}) => {
    const response = await request.put ('https://reqres.in/api/users/2',
      {data:{"name": "morpheus","job": "zion resident"},
       headers:{"Accept":"application/json"}
})
        console.log(await response.json())
        expect (response.status()).toBe(200)

})
test('DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2',)
    expect (response.status()).toBe(204)
})
test('NOT FOUND Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/23',)
    expect (response.status()).toBe(404)
})
test('LIST Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/unknown',)
    expect (response.status()).toBe(200)
    
});
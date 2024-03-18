import { expect, test, describe, assert } from 'vitest';
import axios from 'axios';

let api = 'https://dummyjson.com/auth/';
const postUrl = api + 'login';
const getUrl =api+ 'auth/me'    
let data: any;

// Test with Username or Password using Post Method
describe('API post method tests from dummyjson', async () => {
    let response = await axios.post(postUrl, {
        username: 'kminchelle',
        password: '0lelplR',
    })
    data = response.data
    test('response should returns 200 status', () => {
        expect(response.status).toBe(200);
    })
    // If the login is successful then the token is generated or not
    test('If the login is successful then the token is generated or not',() => {
        expect(response.status===200 && (!!response.data.token)).toBe(true)
    })
})

// Test with incorrect Username or Password using Post Method
test('If incorrect Username or Password then return invalid JSON.', async () => {
   try {
    await axios.post(postUrl, {
        username: 'd',
        password: 'fdsg',
    })
   } catch (error) {
    expect(error.message).toBe("Request failed with status code 400")
   }
})

// Test with token using Get Method
describe('Get API Tests after login', async () => {
    let response: any;
    response = await axios.get(getUrl, {
        headers: {
            'Authorization': `Bearer ${data.token}`, 
        },         
    })    
    test('Run test request get success', () => {
        expect(response.status).toBe(200)
    })

})

// Test for wrong token using Get Method
test('If incorrect token', async()=>{
    try{
        await axios.get(getUrl, {
            headers: {
                'Authorization': `Bearer ${data.id}`, 
            },         
        })
    } catch (error){
        expect(error.message).toBe("Request failed with status code 401")
    }
})
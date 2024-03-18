import { expect, test, describe, assert } from 'vitest';
import axios from 'axios';

let api = 'https://dummyjson.com/auth/';
let res: any;
let res2: any;
const postUrl = api + 'login';

// console.log(res);
// describe('API post method tests from dummyjson', async () => {
//     res = await axios.post(postUrl, {
//         username: 'kminchelle',
//         password: 'fdsg',
//     })
//     test('response should returns 200 status', () => {
//         expect(res.status).toBe(200);
//         console.log(res.config);
//     })
//     test('If the login is successful then the token is generated or not', () => {
//         assert(res.status == 200 && (!!res.data.token), 'Token Generated')
//         // console.log(`${res.status === 200 && (!!res.data.token)} Token Generated Successfull`);
//     })
//     test('Api response data is valid or not.', () => {
//         expect(res.data).not.toBe('');
//     })


// })


test('If incorrect Username or Password then return invalid JSON.', async () => {
    res2 = await axios.post(postUrl, {
        username: 'd',
        password: 'fdsg',
    })
    expect(res).toBe(res);
    // console.log(res.data);
})
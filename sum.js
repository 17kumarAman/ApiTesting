// sum.js
// export function sum(a, b) {
//     return a + b
//   }

// const { STATUS_CODES } = require("http");

//   1Df2zo4qOtbkM6vWpmWKV7TcIF03 user id epf
//  token 
// eyJhbGciOiJSUzI1NiIsImtpZCI6ImViYzIwNzkzNTQ1NzExODNkNzFjZWJlZDI5YzU1YmVmMjdhZDJjY2IiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXQgSXMgQW1hbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKaDZCa1BnQjhveGNVRmR3bjN6enNxWW14T01RN2Fwa1BTdk5xSXJXTHU9czk2LWMiLCJlcGZfa2FybWEiOjIwLCJwcmltYXJ5X2V4YW0iOiI0MHp5N1kwRyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9leGFtcGF0aGZpbmRlcmNvbSIsImF1ZCI6ImV4YW1wYXRoZmluZGVyY29tIiwiYXV0aF90aW1lIjoxNzA5NzE4Mjc2LCJ1c2VyX2lkIjoiMURmMnpvNHFPdGJrTTZ2V3BtV0tWN1RjSUYwMyIsInN1YiI6IjFEZjJ6bzRxT3Ria002dldwbVdLVjdUY0lGMDMiLCJpYXQiOjE3MTA3Mzk4OTIsImV4cCI6MTcxMDc0MzQ5MiwiZW1haWwiOiJhbWFuLmt1bWFyQGV4YW1wYXRoZmluZGVyLm9yZyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwNDY0Mzg2NTkzOTQzMTMyNzUyIl0sImVtYWlsIjpbImFtYW4ua3VtYXJAZXhhbXBhdGhmaW5kZXIub3JnIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Wir0EloMW1x7Y0NdiC526lw0REIPDEcK6ZNoc_u_Vk3r-oL-HMgf5LPiLKxfHF_abTX8R_ZJRN9ZScB0rZyHaVqF54OKw-mggaQ-hFuf3-IrKzwYcn-qCo6xMQIMU4HP3AsfQhPaww6Epun2oxIc6YZoSfHVtUgnp0xK_GUSKZb_0sUKKvVZdEM6P86Q-ckb9Hk36Qn74b4MEUR1MnVnJJjswOFYQYQ_qRl5Q_l-PoamFBm6jX2tMr_WYv8lEAf6OjQo1PkdnJDVeZ7LqJ69Fit9EBh1TaWo1mggtdfGWAgy05Mb4-GHtYIZFu_9uqSQEHVtiJP-vbGKFSVewuY86g
import axios from 'axios';

const api = 'https://dummyjson.com/auth/';

async function postData() {
  try {
    const postUrl = api + 'login';
    const response = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error occurred while posting data:', error);
  }
}

postData();


import supertest from 'supertest';
import axios from 'axios';

const graphQLRequest = (query: string) => {
  return supertest('http://localhost:4001')
    .post('/graphql')
    .send({ query })
    .set('Authorization', 'abc123')
}

describe('Hello Jest', () => {
  it('The Hello World message should be printed', async () => {
    const response = await axios.post('http://localhost:4001', 
    {
      query: `query { 
        helloworld 
      }`,
    variables: {
      id: 2,
      city: 'Test'
    }
  },
  {
    headers: {
      'Authorization': '',
      'Content-Type': 'application/json'
    },
  })
  console.log(response);
  expect(response.data).toStrictEqual({
    "data": {
      "helloworld": "Hello GraphQL in TypeScript"
    }
  })
  })
})

describe('Hello', () => {
  it('The Hello World message should be printed', async () => {
    const helloWorld = await graphQLRequest(
      `query {
        helloworld 
      }`
    )
    expect(helloWorld.body.data.helloworld).toBe('Hello GraphQL in TypeScript')
  })
})

// //// https://stackoverflow.com/a/52868182
// const data = await axios.post(API_URL, {
//   query: `mutation updateUserCity($id: Int!, $city: String!) {
//     updateUserCity(userID: $id, city: $city){
//       id
//       name
//       age
//       city
//       knowledge{
//         language
//         frameworks
//       }
//     }
//   }`,
//   variables: {
//     id: 2,
//     city: 'Test'
//   }
// }, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

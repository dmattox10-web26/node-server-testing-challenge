const request = require('supertest')

const server = require('../server')

describe('server', () => {
    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 200

            const response = await request(server).get('/')

            expect(response.status).toEqual(expectedStatusCode)
        })
        it('should return a JSON object from the index route', async () => {
            const expectedBody = { api: 'up' }

            const response = await request(server).get('/')

            expect(response.body).toEqual(expectedBody)
        })
    })

    describe('smurfs route GET', () => {
        it('should return an OK status code from the GET route', async () => {
            const expectedStatusCode = 200
            
            const response = await request(server).get('/smurfs')

            expect(response.status).toEqual(expectedStatusCode)
        })
        it('should return a JSON object from the GET route', async() => {
            const response = await request(server).get('/smurfs')

            expect(response.type).toEqual('application/json')
        })
    })

    describe('smurfs route POST', () => {
        it('should return a resource added status code from the POST route AND it should return smurfs', async () => {
            const expectedStatusCode = 201

            const response = await request(server)
                .post('/smurfs')
                .send({
                    name: "Smurfette",
                    age: "24",
                    height: "4.4cm"
                })

            expect(response.status).toEqual(expectedStatusCode)

            expect(response.type).toEqual('application/json')
        })
    })

    describe('smurfs route DELETE', () => {
        it('should delete a resource given an ID AND it should return smurfs', async () => {
            const expectedStatusCode = 200

            const response = await request(server).delete('/smurfs/1')

            expect(response.status).toEqual(expectedStatusCode)

            expect(response.type).toEqual('application/json')
        })
    })
})
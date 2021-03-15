const request = require('supertest');
const express = require('express');
const env = require('dotenv').config();
const api = process.env.NODE_ENV !== 'production' ? request(process.env.APP_HOST) : request('http://localhost:3002')
const app = express();

// endpoint
const ping = () => api.get(`/ping`);

// request dan validate response(expect)
describe('Get User Scenario', () => {
    test('ping test', async () => {
    const response = await ping();
    expect(response.status).toEqual(200);
    });
});

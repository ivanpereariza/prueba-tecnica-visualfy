const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET all alerts", () => {
    it("should return all alerts", async () => {
        const res = await request(app).get("/api/alerts");
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });
});

describe("GET priority 2 alerts", () => {
    it("should return alerts with priority 2", async () => {
        const res = await request(app).get("/api/alerts?priority=2");
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });
});

describe("GET alerts with an f in title or type", () => {
    it("should return all alerts with an f in title or type", async () => {
        const res = await request(app).get("/api/alerts?name=f");
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toBeInstanceOf(Array);

        res.body.data.forEach((alert) => {
            expect(alert.title.includes("f")).toBe(true);
        });
    });
});

describe("POST create a new alert", () => {
    it("should create a new alert and return the created alert and his priority", async () => {
        const newAlert = {
            title: "Test",
            type: "Testing",
            priority: 5,
        };

        const res = await request(app).post("/api/alerts").send(newAlert);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("data");

        const createdAlert = res.body.data;
        expect(createdAlert.alert).not.toHaveProperty("_id");
        expect(createdAlert.alert.title).toBe(newAlert.title);
        expect(createdAlert.alert.type).toBe(newAlert.type);
        expect(createdAlert.priority.priority).toBe(newAlert.priority);
        expect(createdAlert.priority.type).toBe(newAlert.type);
    });
});

const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
    test("retourne status ok", async () => {
        const res = await request(app).get("/health");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("ok");
    });
});

describe("POST /calculate", () => {
    test("additionne deux nombres", async () => {
        const res = await request(app)
            .post("/calculate")
            .send({ operation: "add", a: 5, b: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8);
    });

    test("retourne 400 pour opération inconnue", async () => {
        const res = await request(app)
            .post("/calculate")
            .send({ operation: "unknown", a: 1, b: 2 });
        expect(res.statusCode).toBe(400);
    });

    test("retourne 400 pour division par zéro", async () => {
        const res = await request(app)
            .post("/calculate")
            .send({ operation: "divide", a: 10, b: 0 });
        expect(res.statusCode).toBe(400);
    });
});
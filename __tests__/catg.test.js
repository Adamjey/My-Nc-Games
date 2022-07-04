const db = require("../db/connection");
const app = require("../app");
const request = require("supertest");


afterAll(() => {
  return db.end();
});

describe("GET /api/categories", () => {
    test("status 200 , responds with  an array of category objects ", () => {
        return request(app)
            .get("/api/categories")
            .expect(200)
            .then(({ body }) => {
                const { categories } = body;
                expect(categories).toBeInstanceOf(Array);
                categories.forEach((category) => {
                    expect(category).toEqual(
                        expect.objectContaining({
                            slug: expect.any(String),
                            description: expect.any(String),
                        })
                    );
                });
            });
    })
    test("status 404: responds with message(non existing) endpoint", () => {
        return request(app)
          .get("/api/cattegories")
          .expect(404)
          .then(({ body }) => {
            expect(body.msg).toBe("Not Found");
          });
      });
    });

    

const db = require("../db/connection");
const app = require("../app");
const request = require("supertest");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data");


beforeEach(()=> {
    return seed(testData)
});

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
    


describe("GET /api/reviews/:review_id", () => {
    test('200: responds with a review object with the passed id', () => {
        return request(app)
            .get("/api/reviews/1")
            .expect(200)
            .then(({ body }) => {
                const { review } = body;
                expect(review).toMatchObject({
                    review_id: 1,
                    title: 'Agricola',
                    review_body: 'Farmyard fun!',
                    designer: 'Uwe Rosenberg',
                    review_img_url: 'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png',
                    votes: 1,
                    category: 'euro game',
                    owner: 'mallionaire',
                    created_at:expect.any(String),
                })
            })
    });
})

    

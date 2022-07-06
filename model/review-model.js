
const db = require("../db/connection");

exports.fetchReview = (id) => {

    return db
      .query(
        `SELECT reviews.*,
         CAST(COUNT(comments.comment_id) AS INTEGER) AS comment_count 
         FROM reviews LEFT JOIN comments 
         ON reviews.review_id = comments.review_id
         WHERE reviews.review_id = $1 
         GROUP BY reviews.review_id`,
        [id]
    )
     
      .then((response) => {
        console.log(response.rows);
        if (!response.rows.length) {
          return Promise.reject({ status: 404, msg: "Not Found" });

        }
        return response.rows[0];

      });
  };

const { fetchReview, fetchUpdateVotes } = require("../model/review-model");

exports.getReview = (req, res, next) => {
  const { review_id } = req.params;
  fetchReview(review_id)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch((err) => {
      // console.log(err,"<<<<<<");
      next(err);
    });
};

exports.updateReviewVotes = (req, res, next) => {
  const id = req.params.review_id;

  const { inc_votes } = req.body;
  fetchUpdateVotes(id, inc_votes)
    .then((updatedReview) => {
      res.status(200).send({ updatedReview });
    })
    .catch((err) => {
      next(err);
    });
};



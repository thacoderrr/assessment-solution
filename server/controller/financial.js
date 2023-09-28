const Individual = require("../model/individual");
const Financial = require("../model/financial");
const Transaction = require("../model/transaction");

const handleError = (err) => {
  const error = new Error(err);
  error.httpStatusCode = 500;
  return next(error);
};

exports.getIndividualData = (req, res, next) => {
  Individual.find()
    .then((data) => {
      res.status(200).json({
        status: true,
        message: "Indiviual data",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFinancialData = (req, res, next) => {
  Financial.find()
    .then((data) => {
      res.status(200).json({
        status: true,
        message: "Financial data",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTransaction = (req, res, next) => {
  Transaction.find()
    .then((data) => {
      res.status(200).json({
        status: true,
        message: "Financial data",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

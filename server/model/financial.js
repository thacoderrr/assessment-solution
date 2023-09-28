const mongoose = require("mongoose");

const financialDataSchema = new mongoose.Schema({
  portfolioOverview: {
    totalValue: Number,
    numberOfAssets: Number,
  },
  transactionHistory: [
    {
      date: Date,
      type: String,
      asset: String,
      quantity: Number,
      amount: Number,
    },
  ],
  investmentStrategy: String,
  riskAssessment: String,
  contactInformation: {
    advisorName: String,
    advisorEmail: String,
    customerSupportEmail: String,
  },
  securityAndPrivacy: String,
  legalDisclosures: String,
});

const FinancialData = mongoose.model("FinancialData", financialDataSchema);

module.exports = FinancialData;

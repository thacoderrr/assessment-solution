const mongoose = require('mongoose');


const individualInvestmentSchema = new mongoose.Schema({
  name: String,
  tickerSymbol: String,
  description: String,
  quantity: Number,
  currentMarketValue: Number,
  costBasis: Number,
  performanceMetrics: {
    percentageChange: Number,
    roi: Number,
  },
});


const IndiviualData = mongoose.model('Indiviual', individualInvestmentSchema);

module.exports = IndiviualData;

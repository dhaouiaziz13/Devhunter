const prisma = require("../_prisma");

const portfolioService = {
  getportfolio: async ({ id }) => {
    return prisma.portfolio.findFirst({
      id,
    });
  },
};

module.exports = portfolioService;

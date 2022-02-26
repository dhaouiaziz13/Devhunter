const bcryptjs = require("bcryptjs");
const prisma = require("../_prisma");

const authService = {
  login: async ({ email, password }) => {
    const bcrPass = bcryptjs.hashSync(password);
    const user = await prisma.account.findFirst({
      where: {
        email,
        password: bcrPass,
      },
      select: {
        user: {
          select: {
            fname: true,
            lname: true,
            id: true,
            type: true,
          },
        },
      },
    });
    return user ?? false;
  },
  signup: async ({ email, password, fname, lname, type }) => {
    const pass = bcryptjs.hashSync(password);
    const data = await prisma.account.create({
      data: {
        email,
        password: pass,
        user: {
          create: {
            fname,
            lname,
            type,
          },
        },
      },
    });
    return data;
  },
  linkEmail: async ({ email, password, userID }) => {
    return await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        accounts: {
          create: {
            email,
            password,
          },
        },
      },
    });
  },
  logout: async ({ token }) => {
    return await prisma.blacklisted_tokens.create({
      data: {
        token,
      },
    });
  },
  verifyToken: async ({ token }) => {
    const isBlacklisted = await prisma.blacklisted_tokens.findFirst({
      where: {
        token,
      },
    });
    return isBlacklisted ? false : true;
  },
};
module.exports = authService;

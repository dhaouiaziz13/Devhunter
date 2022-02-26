const prisma = require("../_prisma");

const postService = {
  createpost: async ({ content, images }) => {
    return await prisma.post.create({
      data: {
        content,
        images: {
          createMany: {
            data: images.map((a) => ({ url: a?.url })),
          },
        },
      },
    });
  },
  createcomment: async ({ content, image }) => {
    return prisma.comment.create({
      data: {
        content,
        image,
      },
    });
  },
  deletepost: async ({ id }) => {
    return await prisma.post.delete({
      where: {
        id,
      },
    });
  },
  deletecomment: async ({ id }) => {
    return await prisma.comment.delete({
      where: {
        id,
      },
    });
  },
  getposts: async ({ id, page }) => {
    return await prisma.post.findMany({
      where: {
        id,
      },
      skip: parseInt(page) * 5,
      take: 5,
    });
  },
};

module.exports = postService;

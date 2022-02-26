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
  deletepost: ({ id }) => {
    return prisma.post.delete({
      where: {
        id,
      },
    });
  },
  deletecomment: ({ id }) => {
    return prisma.comment.delete({
      where: {
        id,
      },
    });
  },
};

module.exports = postService;

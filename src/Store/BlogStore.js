import { create } from "zustand";

export const useBlogStore = create((set) => ({
  blogs: [
    {
      title: "Best Rummy Apps in India: A Guide for Rummy Apps",
      description:
        "Rummy has always been one of the most beloved card games in India. With the digital revolution, playing rummy is now more accessible than ever through dedicated apps that offer exciting features, secure transactions, and seamless gameplay. Here’s a comprehensive guide to the top rummy apps, their key features, and what makes them stand out.",
      image:
        "https://plus.unsplash.com/premium_photo-1730828574113-201e3352bea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
    {
      title: "This is title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni labore sint ea ratione non et, facilis iste nihil unde a, similique voluptates accusamus beatae vero repudiandae sed deserunt voluptatum sunt officia itaque maiores qui amet ipsa. Molestiae ipsa magnam, sint eos cum quae iusto, tempora repudiandae minima quaerat porro.",
      image:
        "https://plus.unsplash.com/premium_photo-1730828574113-201e3352bea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    },
  ],
  setBlog: (blog) => {
    set({ blog });
  },
}));

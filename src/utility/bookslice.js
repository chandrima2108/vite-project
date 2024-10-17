// src/features/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "category": "Fiction",
      "description": "A novel about the serious issues of rape and racial inequality.",
      "rating": 4.8,
      "image": "https://media.glamour.com/photos/56e1f3c562b398fa64cbd310/master/w_1280%2Cc_limit/entertainment-2016-02-07-main.jpg"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "category": "Fiction",
      "description": "A novel that presents a dystopian future under a totalitarian regime.",
      "rating": 4.7,
      "image": "https://www.historynet.com/wp-content/uploads/2022/05/1984-by-George-Orwell-book-cover.jpeg"
    },
    {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "category": "Classic",
      "description": "A novel about the American dream and the roaring twenties.",
      "rating": 4.5,
      "image": "https://usercontent2.hubstatic.com/6921909_f520.jpg"
    },
    {
      "id": 4,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "category": "Classic",
      "description": "A novel about teenage rebellion and angst.",
      "rating": 4.3,
      "image": "https://th.bing.com/th/id/R.cac52fbbefa83812774f681dbf874163?rik=v%2bHq2yBp%2f6RzYw&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2fc%2fcatcher-in-the-rye%2f9780316769488_custom-b6fc2e108f3865eb320720875c20e4f869da8065-s6-c30.jpg&ehk=fpDBmQJbSuHhhoBl2AYOifBz0QLtjPI7FBgIYnU65cM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "id": 5,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "category": "Classic",
      "description": "A novel about manners, upbringing, morality, and marriage.",
      "rating": 4.6,
      "image": "https://images.thenile.io/r1000/9781909621657.jpg"
    },
      {
        "id": 6,
        "title": "Moby Dick",
        "author": "Herman Melville",
        "category": "Adventure",
        "description": "A novel about the voyage of the whaling ship Pequod.",
        "rating": 4.4,
        "image": "https://th.bing.com/th/id/OIP.1tQEKUzUcA3u0x3TeDQ-6AHaLm?rs=1&pid=ImgDetMain"
      },
      {
        "id": 7,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "category": "Historical",
        "description": "A novel that chronicles the French invasion of Russia.",
        "rating": 4.7,
        "image": "https://th.bing.com/th/id/OIP.lDNKNAduPAU6_kyoD4d6BAHaLM?rs=1&pid=ImgDetMain"
      },
      {
        "id": 8,
        "title": "The Odyssey",
        "author": "Homer",
        "category": "Epic",
        "description": "An epic poem about the journey of Odysseus.",
        "rating": 4.6,
        "image": "https://images.saymedia-content.com/.image/t_share/MTkxMjE5MDM0NzQwNzYxNjc3/odyssey-as-an-epic.jpg"
      },
      {
        "id": 9,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fantasy",
        "description": "A fantasy novel about the journey of Bilbo Baggins.",
        "rating": 4.8,
        "image": "https://flxt.tmsimg.com/assets/p10569555_p_v10_ag.jpg"
      },
      {
        "id": 10,
        "title": "The Catch-22",
        "author": "Joseph Heller",
        "category": "Satire",
        "description": "A novel about the absurdities of war.",
        "rating": 4.5,
        "image": "https://th.bing.com/th/id/OIP.QltAnnou1ZhYBxotnKplUAHaLW?rs=1&pid=ImgDetMain"
      }
    
    
    
  ]
  ,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice;

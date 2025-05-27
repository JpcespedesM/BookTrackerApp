# Book Tracker App

A modern web application for book enthusiasts to manage their reading journey. Track books you're currently reading, have completed, or plan to read in the future.

## 🌟 Features

- **Book Management**
  - Add books to different reading lists (Currently Reading, Already Read, Want to Read)
  - Remove books from lists
  - Search books by title, author, or ISBN
  - Persistent storage using localStorage

- **User Experience**
  - Clean and intuitive interface
  - Responsive design
  - Real-time updates
  - Easy navigation between lists

## 🛠️ Technologies

- **Frontend**
  - React 19
  - Next.js 15
  - TypeScript
  - Tailwind CSS

- **Data Management**
  - Local Storage for data persistence
  - JSON for book database

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── books/        # Book-related components
│   │   ├── lists/        # List-related components
│   │   └── profile/      # Profile components
│   ├── hooks/            # Custom hooks
│   │   ├── useBooks.ts   # Book search and selection logic
│   │   └── useReadingLists.ts # Reading lists management
│   └── types/            # TypeScript type definitions
│       ├── book.ts       # Book-related types
│       ├── lists.ts      # List-related types
│       └── index.ts      # Type exports
├── page.tsx              # Home page
└── profile/
    └── page.tsx          # Profile page
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-tracker-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. **Search Books**
   - Use the search bar to find books by title, author, or ISBN
   - Click on a book to select it

2. **Manage Reading Lists**
   - Add books to your preferred list (Reading, Already Read, Want to Read)
   - Remove books from lists by selecting them and clicking the delete button
   - View all your lists in the Profile section

## 🏗️ Architecture

- **Components**: Organized by feature (books, lists, profile)
- **Hooks**: Separated by concern (book search vs list management)
- **Types**: Centralized type definitions for better maintainability
- **Pages**: Next.js app router structure for routing

## 🔜 Future Improvements

- User authentication and profiles
- Backend integration for data persistence
- Book cover images
- Reading progress tracking
- Reading statistics and insights
- Social features (sharing, recommendations)
- Mobile app version

## 👨‍💻 Author

Juan Paulo Céspedes Méndez  
[GitHub Profile](https://github.com/JpcespedesM)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

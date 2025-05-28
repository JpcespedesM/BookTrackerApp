# Book Tracker App

A React application for tracking and managing your reading lists.

## Features

- Search books by title, author, or ISBN
- View detailed book information
- Navigate to individual book pages
- Manage reading lists (Currently Reading, Already Read, Want to Read)
- Persistent storage using localStorage

## Project Structure

### Hooks

- `useBooks`: Manages book search and retrieval operations
  - `filterBooks`: Search books by title, ISBN or author
  - `getBookDetails`: Get detailed information about a specific book

### Context

- `ReadingListsContext`: Manages reading lists state and operations
  - List management (add, remove, move books)
  - List persistence
  - Active category management

### Components

- `BookSearch`: Displays search results and provides navigation to book details
- `ProfileInformation`: Shows user's reading lists and book details
- `List`: Displays a collection of books with interactive features

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── books/        # Book-related components
│   │   │   ├── BookSearch.tsx    # Book search and results
│   │   │   └── BookDetails.tsx   # Individual book view
│   │   ├── lists/        # List-related components
│   │   │   └── List.tsx          # List display component
│   │   └── profile/      # Profile components
│   │       └── showProfile.tsx   # Profile view
│   ├── context/          # React Context
│   │   └── ReadingListsContext.tsx  # Reading lists state management
│   ├── hooks/            # Custom hooks
│   │   └── useBooks.ts   # Book search and details logic
│   └── types/            # TypeScript type definitions
│       ├── book.ts       # Book-related types
│       ├── lists.ts      # List-related types
│       └── index.ts      # Type exports
├── page.tsx              # Home page
└── book/
    └── [isbn]/
        └── page.tsx      # Dynamic book details page
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS

## 🛠️ Technologies

- **Frontend**
  - React 19
  - Next.js 15
  - TypeScript
  - Tailwind CSS

- **Data Management**
  - Local Storage for data persistence
  - JSON for book database

## 📝 Usage

1. **Search Books**
   - Use the search bar to find books by title, author, or ISBN
   - Click on a book to view its details

2. **Manage Reading Lists**
   - Add books to your preferred list (Reading, Already Read, Want to Read)
   - Remove books from lists by selecting them and clicking the delete button
   - View all your lists in the Profile section

## 🏗️ Architecture

- **Components**: Organized by feature (books, lists, profile)
- **Context**: Centralized state management for reading lists
- **Hooks**: Focused on book search and details
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

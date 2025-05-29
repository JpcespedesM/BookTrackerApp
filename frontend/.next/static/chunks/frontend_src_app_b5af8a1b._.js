(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/frontend/src/app/Components/books/books.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"title\":\"Cien años de soledad\",\"isbn\":\"978-0307474728\",\"author\":\"Gabriel García Márquez\",\"description\":\"Una saga familiar mágica en el mítico pueblo de Macondo.\"},{\"title\":\"1984\",\"isbn\":\"978-0451524935\",\"author\":\"George Orwell\",\"description\":\"Una distopía sobre vigilancia y control totalitario.\"},{\"title\":\"El nombre del viento\",\"isbn\":\"978-0756404741\",\"author\":\"Patrick Rothfuss\",\"description\":\"La historia de Kvothe, un músico y mago legendario.\"},{\"title\":\"Orgullo y prejuicio\",\"isbn\":\"978-1503290563\",\"author\":\"Jane Austen\",\"description\":\"Un clásico sobre amor y clases sociales en la Inglaterra del siglo XIX.\"},{\"title\":\"El señor de los anillos\",\"isbn\":\"978-0618640157\",\"author\":\"J.R.R. Tolkien\",\"description\":\"La épica aventura para destruir el Anillo Único.\"}]"));}}),
"[project]/frontend/src/app/hooks/useBooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Custom hook for managing book-related operations
 * 
 * This hook is responsible for book search and retrieval operations.
 * It provides functionality to:
 * - Search books by title, ISBN or author
 * - Get detailed information about a specific book
 * 
 * @returns {Object} An object containing:
 * - filterBooks: Function to search books by title, ISBN or author
 * - getBookDetails: Function to get book details by ISBN
 */ __turbopack_context__.s({
    "useBooks": (()=>useBooks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$books$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/frontend/src/app/Components/books/books.json (json)");
;
function useBooks() {
    const filterBooks = (searchTerm)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$books$2e$json__$28$json$29$__["default"].filter((book)=>book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    };
    const getBookDetails = (isbn)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$books$2e$json__$28$json$29$__["default"].find((book)=>book.isbn === isbn);
    };
    return {
        filterBooks,
        getBookDetails
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/Components/books/BookSearch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * SearchedBook Component
 * 
 * Displays search results for books and provides navigation to book details.
 * The component filters books based on the search title and allows users to
 * navigate to individual book pages.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Search term to filter books
 * @returns {JSX.Element} A list of filtered books with links to their details
 * 
 * Features:
 * - Real-time book search
 * - Links to individual book pages
 * - Displays book title, author and ISBN
 * 
 * States:
 * - Uses useBooks for book search functionality
 * - Uses ReadingListsContext for list management
 * 
 * Rendering:
 * - Shows "Start typing" when search term is empty
 * - Shows "No books found" when no matches are found
 * - Displays matching books with title, author and ISBN
 * - Each book is a clickable link to its details page
 */ __turbopack_context__.s({
    "default": (()=>SearchedBook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/hooks/useBooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$context$2f$ReadingListsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/context/ReadingListsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SearchedBook(props) {
    _s();
    const { filterBooks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooks"])();
    const { selectedBook, setSelectedBook, readingList, alreadyReadList, wantToReadList, addToList, setReadingList, setAlreadyReadList, setWantToReadList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$context$2f$ReadingListsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadingLists"])();
    if (props.title === '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Start typing"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    const filteredBooks = filterBooks(props.title);
    if (filteredBooks.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No books found"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: filteredBooks.map((book)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/book/${book.isbn}`,
                className: "border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start",
                onClick: ()=>setSelectedBook(book.isbn),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold",
                        children: book.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
                        lineNumber: 64,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700",
                        children: [
                            "Author: ",
                            book.author
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
                        lineNumber: 65,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700",
                        children: [
                            "ISBN: ",
                            book.isbn
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
                        lineNumber: 66,
                        columnNumber: 19
                    }, this)
                ]
            }, book.isbn, true, {
                fileName: "[project]/frontend/src/app/Components/books/BookSearch.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this);
        })
    }, void 0, false);
}
_s(SearchedBook, "hTN+r0zr9ucHEDkMJ5XSWATdMps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$context$2f$ReadingListsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadingLists"]
    ];
});
_c = SearchedBook;
var _c;
__turbopack_context__.k.register(_c, "SearchedBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/Components/books/BookCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * BookForm Component
 * 
 * A form component that allows users to search for books by title, ISBN, or author.
 * The component includes a search input field and displays search results through
 * the SearchedBook child component.
 * 
 * @component
 * @returns {JSX.Element} A form with search functionality for books
 * 
 * State:
 * - searchTitle: String containing the current search term
 * 
 * Child Components:
 * - SearchedBook: Displays search results based on searchTitle prop
 */ __turbopack_context__.s({
    "default": (()=>BookForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$BookSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/Components/books/BookSearch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BookForm() {
    _s();
    const [searchTitle, setSearchTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto mt-10 p-4 border rounded shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Add a New Book"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-gray-700 mb-2",
                                htmlFor: "title",
                                children: "Title, ISBN, Author"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "title",
                                value: searchTitle,
                                onChange: (e)=>setSearchTitle(e.target.value),
                                className: "w-full px-3 py-2 border rounded",
                                placeholder: "Enter book title"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$BookSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: searchTitle
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/Components/books/BookCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(BookForm, "TxOsYzJMRj2LuIo4LYH+d0ddjng=");
_c = BookForm;
var _c;
__turbopack_context__.k.register(_c, "BookForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=frontend_src_app_b5af8a1b._.js.map
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/frontend/src/app/hooks/useReadingLists.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useReadingLists": (()=>useReadingLists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useReadingLists() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reading');
    const [selectedBook, setSelectedBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const saveToLocalStorage = (list, listName)=>{
        window.localStorage.setItem(listName, JSON.stringify(list));
    };
    const loadFromLocalStorage = (listName)=>{
        const list = window.localStorage.getItem(listName);
        return list ? JSON.parse(list) : [];
    };
    const [readingList, setReadingList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadFromLocalStorage('reading'));
    const [alreadyReadList, setAlreadyReadList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadFromLocalStorage('alreadyRead'));
    const [wantToReadList, setWantToReadList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadFromLocalStorage('wantToRead'));
    const getListInfo = (category)=>{
        switch(category){
            case 'reading':
                return {
                    list: readingList,
                    setList: setReadingList,
                    name: 'reading'
                };
            case 'alreadyRead':
                return {
                    list: alreadyReadList,
                    setList: setAlreadyReadList,
                    name: 'alreadyRead'
                };
            case 'wantToRead':
                return {
                    list: wantToReadList,
                    setList: setWantToReadList,
                    name: 'wantToRead'
                };
            default:
                return null;
        }
    };
    const addToList = (list, setList, listName)=>{
        if (!list.includes(selectedBook)) {
            setList([
                ...list,
                selectedBook
            ]);
            saveToLocalStorage([
                ...list,
                selectedBook
            ], listName);
            setSelectedBook('');
        }
    };
    const deleteFromList = (list, setList, listName)=>{
        if (list.includes(selectedBook)) {
            const updatedList = list.filter((isbn)=>isbn !== selectedBook);
            setList(updatedList);
            saveToLocalStorage(updatedList, listName);
            setSelectedBook('');
        }
    };
    const moveToList = (targetList)=>{
        if (!selectedBook) return;
        const currentListInfo = getListInfo(activeCategory);
        if (!currentListInfo) return;
        const targetListInfo = getListInfo(targetList);
        if (!targetListInfo) return;
        const updatedCurrentList = currentListInfo.list.filter((isbn)=>isbn !== selectedBook);
        currentListInfo.setList(updatedCurrentList);
        saveToLocalStorage(updatedCurrentList, currentListInfo.name);
        if (!targetListInfo.list.includes(selectedBook)) {
            targetListInfo.setList([
                ...targetListInfo.list,
                selectedBook
            ]);
            saveToLocalStorage([
                ...targetListInfo.list,
                selectedBook
            ], targetListInfo.name);
        }
        setSelectedBook('');
    };
    return {
        selectedBook,
        readingList,
        alreadyReadList,
        wantToReadList,
        activeCategory,
        setActiveCategory,
        setReadingList,
        setAlreadyReadList,
        setWantToReadList,
        setSelectedBook,
        addToList,
        deleteFromList,
        moveToList,
        loadFromLocalStorage
    };
}
_s(useReadingLists, "zzVuigobj1TWU4js8z7AEYqFCSc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/Components/books/books.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"title\":\"Cien años de soledad\",\"isbn\":\"978-0307474728\",\"author\":\"Gabriel García Márquez\",\"description\":\"Una saga familiar mágica en el mítico pueblo de Macondo.\"},{\"title\":\"1984\",\"isbn\":\"978-0451524935\",\"author\":\"George Orwell\",\"description\":\"Una distopía sobre vigilancia y control totalitario.\"},{\"title\":\"El nombre del viento\",\"isbn\":\"978-0756404741\",\"author\":\"Patrick Rothfuss\",\"description\":\"La historia de Kvothe, un músico y mago legendario.\"},{\"title\":\"Orgullo y prejuicio\",\"isbn\":\"978-1503290563\",\"author\":\"Jane Austen\",\"description\":\"Un clásico sobre amor y clases sociales en la Inglaterra del siglo XIX.\"},{\"title\":\"El señor de los anillos\",\"isbn\":\"978-0618640157\",\"author\":\"J.R.R. Tolkien\",\"description\":\"La épica aventura para destruir el Anillo Único.\"}]"));}}),
"[project]/frontend/src/app/Components/lists/list.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>List)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$books$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/frontend/src/app/Components/books/books.json (json)");
'use client';
;
;
function List({ list, setSelectedBook, setActiveCategory, listName }) {
    const getBookDetails = (isbn)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$books$2f$books$2e$json__$28$json$29$__["default"].find((book)=>book.isbn === isbn);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mb-2",
                children: listName
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            list.length > 0 ? list.map((isbn)=>{
                const book = getBookDetails(isbn);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "border p-4 mb-4 rounded shadow hover:bg-gray-100 w-full flex flex-col items-start",
                    onClick: ()=>{
                        if (book) {
                            setSelectedBook(book.isbn);
                            setActiveCategory(listName === "📖 Reading Now" ? 'reading' : listName === "📚 Already Read" ? 'alreadyRead' : 'wantToRead');
                        }
                    },
                    children: book ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: book.title
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                                lineNumber: 38,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    "Author: ",
                                    book.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                                lineNumber: 39,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    "ISBN: ",
                                    book.isbn
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                                lineNumber: 40,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Book details not available."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                }, isbn, false, {
                    fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, this);
            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "No books in this list."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/Components/lists/list.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = List;
var _c;
__turbopack_context__.k.register(_c, "List");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/Components/profile/showProfile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * ProfileInformation Component
 * 
 * Displays a user's reading lists and book details, allowing interaction with books
 * across different reading status categories.
 * 
 * @component
 * @returns {JSX.Element} A profile view showing reading lists and book details
 * 
 * States (from useBooks hook):
 * - readingList: Array of ISBNs for books currently being read
 * - alreadyReadList: Array of ISBNs for completed books
 * - wantToReadList: Array of ISBNs for future reading
 * - setSelectedBook: Function to set currently selected book
 * 
 * Helper Functions:
 * - getBookDetails: Retrieves full book details from ISBN
 * 
 * Sections:
 * - Reading Now: Shows books currently being read
 * - Already Read: Shows completed books (not shown in truncated view)
 * - Want to Read: Shows books planned for future (not shown in truncated view)
 * 
 * Features:
 * - Clickable book entries to select books
 * - Book details including title, author and ISBN
 * - Empty state handling for lists with no books
 */ __turbopack_context__.s({
    "default": (()=>ProfileInformation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useReadingLists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/hooks/useReadingLists.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$lists$2f$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/Components/lists/list.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProfileInformation() {
    _s();
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { readingList, alreadyReadList, wantToReadList, selectedBook, activeCategory, setReadingList, setAlreadyReadList, setWantToReadList, deleteFromList, setSelectedBook, setActiveCategory, moveToList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useReadingLists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadingLists"])();
    const handleDelete = ()=>{
        let list = [];
        let setList = ()=>{};
        let listName = '';
        switch(activeCategory){
            case 'reading':
                list = readingList;
                setList = setReadingList;
                listName = 'reading';
                break;
            case 'alreadyRead':
                list = alreadyReadList;
                setList = setAlreadyReadList;
                listName = 'alreadyRead';
                break;
            case 'wantToRead':
                list = wantToReadList;
                setList = setWantToReadList;
                listName = 'wantToRead';
                break;
        }
        deleteFromList(list, setList, listName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto mt-10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded shadow-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$lists$2f$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            list: readingList,
                            setSelectedBook: setSelectedBook,
                            setActiveCategory: setActiveCategory,
                            listName: "📖 Reading Now"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded shadow-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$lists$2f$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            list: alreadyReadList,
                            setSelectedBook: setSelectedBook,
                            setActiveCategory: setActiveCategory,
                            listName: "📚 Already Read"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded shadow-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$Components$2f$lists$2f$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            list: wantToReadList,
                            setSelectedBook: setSelectedBook,
                            setActiveCategory: setActiveCategory,
                            listName: "📖 Want to Read"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
                        onClick: handleDelete,
                        disabled: !selectedBook,
                        children: "Delete from list"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400",
                                onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                disabled: !selectedBook,
                                children: "Move to list"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    children: [
                                        activeCategory !== 'reading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                            onClick: ()=>{
                                                moveToList('reading');
                                                setIsDropdownOpen(false);
                                            },
                                            children: "📖 Reading Now"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this),
                                        activeCategory !== 'alreadyRead' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                            onClick: ()=>{
                                                moveToList('alreadyRead');
                                                setIsDropdownOpen(false);
                                            },
                                            children: "📚 Already Read"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this),
                                        activeCategory !== 'wantToRead' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                            onClick: ()=>{
                                                moveToList('wantToRead');
                                                setIsDropdownOpen(false);
                                            },
                                            children: "📖 Want to Read"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/Components/profile/showProfile.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(ProfileInformation, "q8vAtnDFDkzMLt0+IIwiXVyacp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$hooks$2f$useReadingLists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadingLists"]
    ];
});
_c = ProfileInformation;
var _c;
__turbopack_context__.k.register(_c, "ProfileInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=frontend_src_app_226c9974._.js.map
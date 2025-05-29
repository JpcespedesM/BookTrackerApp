module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/frontend/src/app/context/ReadingListsContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReadingListsProvider": (()=>ReadingListsProvider),
    "useReadingLists": (()=>useReadingLists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ReadingListsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ReadingListsProvider = ({ children })=>{
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('reading');
    const [selectedBook, setSelectedBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const saveToLocalStorage = (list, listName)=>{
        window.localStorage.setItem(listName, JSON.stringify(list));
    };
    const loadFromLocalStorage = (listName)=>{
        const list = window.localStorage.getItem(listName);
        return list ? JSON.parse(list) : [];
    };
    const [readingList, setReadingList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [alreadyReadList, setAlreadyReadList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wantToReadList, setWantToReadList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setReadingList(loadFromLocalStorage('reading'));
        setAlreadyReadList(loadFromLocalStorage('alreadyRead'));
        setWantToReadList(loadFromLocalStorage('wantToRead'));
    }, []);
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
            const updatedList = [
                ...list,
                selectedBook
            ];
            setList(updatedList);
            saveToLocalStorage(updatedList, listName);
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
        const targetListInfo = getListInfo(targetList);
        if (!currentListInfo || !targetListInfo) return;
        const updatedCurrentList = currentListInfo.list.filter((isbn)=>isbn !== selectedBook);
        currentListInfo.setList(updatedCurrentList);
        saveToLocalStorage(updatedCurrentList, currentListInfo.name);
        if (!targetListInfo.list.includes(selectedBook)) {
            const updatedTargetList = [
                ...targetListInfo.list,
                selectedBook
            ];
            targetListInfo.setList(updatedTargetList);
            saveToLocalStorage(updatedTargetList, targetListInfo.name);
        }
        setSelectedBook('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReadingListsContext.Provider, {
        value: {
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
            moveToList
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/context/ReadingListsContext.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
};
const useReadingLists = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ReadingListsContext);
    if (!context) {
        throw new Error('useReadingLists must be used within a ReadingListsProvider');
    }
    return context;
};
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__02794f35._.js.map
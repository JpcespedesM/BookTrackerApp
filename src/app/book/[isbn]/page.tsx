import books from '../../Components/books/books.json';

export default function BookDetailPage({ params }: { params: { isbn: string } }) {
    const { isbn } = params;
    const book = books.find((book) => book.isbn === isbn);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
            <p className="text-gray-600 mb-4">Author: {book.author}</p>
            <p className="text-gray-600 mb-4">Description: {book.description}</p>
        </div>
    );
}

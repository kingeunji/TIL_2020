// routes/index.js

module.exports = function(app, Book) {

    // GET /books
    app.get('/api/books', function(req, res) {
        Book.find(function(err, books) {
            if (err) return res.status(500).json({ error: 'database failure' });
            res.json(books);
        });
    });

    // GET /book/:book_id
    app.get('/api/book/:book_id', function(req, res) {
        Book.findOne({ _id: req.params.book_id }, function(err, book) {
            if (err) return res.status(500).json({ error: 'database failure' });
            if (!book) return res.status(404).json({ error: 'book not found' });
            res.json(book);
        })
    });

    // GET /books/author/:author 
    app.get('/api/books/author/:author', function(req, res) {
        Book.find({ author: req.params.author }, { _id: 0, title: 1, published_date: 1 }, function(err, books) {
            if (err) return res.status(500).json({ error: err });
            if (books.length === 0) return res.status(404).json({ error: 'book not found' });
            res.json(books);
        })
    });

    // POST /book
    app.post('/api/book', function(req, res) {
        var book = new Book();
        book.title = req.body.name;
        book.author = req.body.author;
        book.published_date = new Date(req.body.published_date);

        book.save(function(err) {
            if (err) {
                console.log(err);
                res.json({ result: 0 });
                return;
            }

            res.json({ result: 1 });
        })
    });

    // PUT /book/:book_id
    app.put('/api/book/:book_id', function(req, res) {
        Book.findById(req.params.book_id, function(err, book) {
            if (err) return res.status(500).json({ error: 'database failure' });
            if (!book) return res.status(404).json({ error: 'book not found' });

            if (req.body.title) book.title = req.body.title;
            if (req.body.author) book.author = req.body.author;
            if (req.body.published_date) book.published_date = req.body.published_date;

            book.save(function(err) {
                if (err) res.status(500).json({ error: 'database failure' });
                res.json({ message: 'book updated' });
            })
        })
    });

    // DELETE /book/:book_id
    app.delete('/api/book/:book_id', function(req, res) {
        Book.remove({ _id: req.params.book_id }, function(err, output) {
            if (err) return res.status(500).json({ error: "database failure" });

            res.status(204).end();
        })
    });

}
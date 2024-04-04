exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "First Post", content: "This is the first post!" }],
    });
};

exports.createPost = (req, res, next) => {
    // Cần body-parser để phân tích lấy được dữ liệu từ body client
    const title = req.body.title;
    const content = req.body.content;

    // Create post in db
    res.status(201).json({
        message: "Post creates successfully!",
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content,
        },
    });
};

function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.numberOfWords = function() {
    let textArray = this.body.split(" ");
    let wordCount = 0;
    textArray.forEach(function(word) {
        wordCount ++
    });
    return wordCount;
}
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

Entry.prototype.vowelCounter = function() {
    return this.body.match(/[aieou]/gi).length;
}

Entry.prototype.consonantCounter = function() {
    return this.body.match(/[qzwsxdcrfvtgbyhnjmklp]/gi).length;
}

Entry.prototype.getTeaser = function() {
    const sentenceArr = this.body.split(/[!.?]/);
    const firstSentenceArr = sentenceArr[0].split(" ");
    if  (firstSentenceArr.length <= 8) {
        return firstSentenceArr.join(" ")}
    else {
        return firstSentenceArr.slice(0, 8).join(" ")
    }
}

//user interface

window.addEventListener("load", function () {
    document.getElementById("notSubmit").addEventListener("click", displayThings);
})



function displayThings() {
    event.preventDefault();
    const title = document.getElementById("entryTitle").value;
    const body = document.getElementById("bodyText").value;
    let newEntry = new Entry(title, body);
    document.getElementById("entryTitleSpan").innerHTML = newEntry.title;
    document.getElementById("wordsOutput").innerHTML = newEntry.numberOfWords();
    document.getElementById("vowelsOutput").innerHTML = newEntry.vowelCounter();
    document.getElementById("consOutput").innerHTML = newEntry.consonantCounter();
    document.getElementById("teaseOutput").innerHTML = newEntry.getTeaser();
}
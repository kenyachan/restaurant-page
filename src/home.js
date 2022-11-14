export default function homePage() {
    const homePage = document.createElement('section');
    homePage.setAttribute('id', 'home-page');
    homePage.classList.add('page-width');
    homePage.classList.add('page');

    const quoteBlock = document.createElement('div');
    quoteBlock.classList.add('quote-block');
    homePage.appendChild(quoteBlock);

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '"Welcome to my kitchen! I only know how to make one dish, but it is the best dish you will ever taste!"';
    quoteBlock.appendChild(quote);

    const quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('author');
    quoteAuthor.textContent = '- Kenya Chan';
    quoteBlock.appendChild(quoteAuthor);

    return homePage;
}
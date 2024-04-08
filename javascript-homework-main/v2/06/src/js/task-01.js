const categories = document.querySelectorAll('#categories .item');

console.log(`Total categories: ${categories.length}`);

categories.forEach (pula => {
    const title = pula.querySelector('h2').textContent;
    const items = pula.querySelectorAll('li').length;
    console.log(`Title: ${title}, Number of items: ${items}`);
});
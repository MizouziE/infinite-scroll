var names = ['Lex Fridman', 'Leo Tolstoy', 'Albert Camus', 'Alexandre Dumas', 'Robert Persig', 'Atticus Finch'];

const getPosts = (number) => {
    let ret = [];
    for (var i = 0; i < number; i++) {
        ret.push({
            author: names[i % names.length],
            content: 'Lorem ipsum dolro sit amet, consectetur adipiscing elit, sed do.'
        });
    }

    return ret;
};

export default getPosts;
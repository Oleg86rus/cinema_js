const listCard = document.querySelector('.other-films__list');
const renderCard = async (data) => {
   // console.log(data);

    listCard.textContent = '';

    Promise.all(data.map(async (item) => {

        
        console.log('item: ', item);
        console.log(item.title || item.name)
        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
        //if (key) link.href = `https://youtu.be/${key}`
        link.className = 'other-films__link';
        link.dataset.rating = item.vote_average;
        

        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `постер ${item.title || item.name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

        link.append(img);
        card.append(link);
       return card;
    })).then(cards => console.log(cards))

    

    
    
    //console.log(cards);
    //listCard.append(...cards);
};
export default renderCard;
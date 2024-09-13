const catalog = [
    {
        name: 'Кроссовки',
        img: 'https://images.satu.kz/210472827_w600_h600_210472827.jpg',
        price: 1488,
        oldPrice: 5252,
        currency: '$',
        description: 'Жопа индейца',

    },
    {
        name: 'Вансы-100% Оригинал',
        img: 'https://static.street-beat.ru/upload/resize_cache/iblock/52a/500_500_1/ktrsudqn3cuhh09qiaoupctqxn5thqv9.jpg',
        price: 1488,
        oldPrice: 5252,
        currency: '$',
        description: 'Жопа индейца',

    },
    {
        name: 'ДЖорадн Мкалн',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d6092da3-8d35-4ed1-b4a1-ee8cdb0563f0/220x330',
        price: 1488,
        oldPrice: 5252,
        currency: '$',
        description: 'Жопа индейца',

    },
    {
        name: 'Макларин',
        img: 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/raqc0fhylroix2detzyb.jpg',
        price: 1488,
        oldPrice: 5252,
        currency: '$',
        description: 'Жопа индейца',

    },
    {
        name: 'Обормот',
        img: 'https://masterpiecer-images.s3.yandex.net/5f8f641bb3da77f:upscaled',
        price: 1488,
        oldPrice: 5252,
        currency: '$',
        description: 'Жопа индейца',

    },
]


const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += ` 
 <div class="card">
 <img src=${card.img} alt="" />
 <h3>${card.name}</h3>
 <p>${card.description}</p>
 <s>${card.oldPrice} ${card.currency}</s>
 <h4>${card.price}</h4>
 </div>`
})
const food = [
  {
    title: 'Pizza "Deniz"',
    price: 680,
    image: require('../images/images/p_1.jpeg'),
  },
  {
    title: 'Pizza "Calabresa"',
    price: 660,
    image: require('../images/images/p_6.jpeg'),
  },
  {
    title: 'Pizza "Macio"',
    price: 560,
    image: require('../images/images/p_2.jpeg'),
  },
  {
    title: 'Pizza "Ela-diabo"',
    price: 660,
    image: require('../images/images/p_7.jpeg'),
  },
  {
    title: 'Pizza "Julien Alın"',
    price: 560,
    image: require('../images/images/p_3.jpeg'),
  },
  {
    title: 'Pizza "Brokolili Frango"',
    price: 560,
    image: require('../images/images/p_4.jpeg'),
  },
  {
    title: 'Pizza "Salmão e spinafre"',
    price: 660,
    image: require('../images/images/p_8.jpeg'),
  },
  {
    title: 'Pizza "Queijo"',
    price: 520,
    image: require('../images/images/p_9.jpeg'),
  },
  {
    title: 'Grego',
    price: 380,
    image: require('../images/images/s_1.jpeg'),
  },
  {
    title: 'Frango ile Sezar',
    price: 420,
    image: require('../images/images/s_3.jpeg'),
  },
  {
    title: 'Camarões ile Sezar',
    price: 450,
    image: require('../images/images/s_4.jpeg'),
  },
  {
    title: 'Lula salatası',
    price: 420,
    image: require('../images/images/s_5.jpeg'),
  },
  {
    title: 'Bayram',
    price: 390,
    image: require('../images/images/s_7.jpeg'),
  },
  {
    title: 'Ekzotik',
    price: 390,
    image: require('../images/images/s_10.jpeg'),
  },
  {
    title: 'Queijo platosu',
    price: 420,
    image: require('../images/images/l_1.jpeg'),
  },
  {
    title: 'Ringa balığı',
    price: 250,
    image: require('../images/images/l_2.jpeg'),
  },
  {
    title: 'Salmão de/de sale propría',
    price: 430,
    image: require('../images/images/l_3.jpeg'),
  },
  {
    title: 'Língua de boi',
    price: 310,
    image: require('../images/images/l_4.jpeg'),
  },
  {
    title: 'Café da manhã "Raznosoli"',
    price: 250,
    image: require('../images/images/l_5.jpeg'),
  },
  {
    title: 'Alho de centeio kruton',
    price: 150,
    image: require('../images/images/l_7.jpeg'),
  },
  {
    title: 'Жаренные креветки',
    price: 450,
    image: require('../images/images/l_8.jpeg'),
  },
  {
    title: 'Biftek kulpları',
    price: 320,
    image: require('../images/images/l_9.jpeg'),
  },
  {
    title: 'Wiener Schnitzel',
    price: 480,
    image: require('../images/images/h_2.jpeg'),
  },
  {
    title: 'Fransızca Et',
    price: 480,
    image: require('../images/images/h_4.jpeg'),
  },
  {
    title: 'Tay Frango',
    price: 420,
    image: require('../images/images/h_8.jpeg'),
  },
  {
    title: 'Salmao şişleri',
    price: 750,
    image: require('../images/images/h_9.jpeg'),
  },
  {
    title: 'Salmão filetosu',
    price: 320,
    image: require('../images/images/h_10.jpeg'),
  },
  {
    title: 'Tatlı patates kızartması',
    price: 170,
    image: require('../images/images/g_1.jpeg'),
  },
  {
    title: 'Rustik tatlı patates',
    price: 170,
    image: require('../images/images/g_2.jpeg'),
  },
  {
    title: 'Vegetais grelhados',
    price: 430,
    image: require('../images/images/g_3.jpeg'),
  },
  {
    title: 'Salmão',
    price: 190,
    image: require('../images/images/r_1.jpeg'),
  },
  {
    title: 'Salatalık',
    price: 160,
    image: require('../images/images/r_2.jpeg'),
  },
  {
    title: 'Akne',
    price: 160,
    image: require('../images/images/r_3.jpeg'),
  },
  {
    title: 'Camarao',
    price: 190,
    image: require('../images/images/r_4.jpeg'),
  },
  {
    title: 'Abakat',
    price: 180,
    image: require('../images/images/r_5.jpeg'),
  },
  {
    title: 'Philadelphia',
    price: 420,
    image: require('../images/images/r_6.jpeg'),
  },
  {
    title: 'Çukago',
    price: 320,
    image: require('../images/images/r_7.jpeg'),
  },
  {
    title: 'Quioto',
    price: 280,
    image: require('../images/images/r_8.jpeg'),
  },
  {
    title: 'Ey Drago',
    price: 390,
    image: require('../images/images/r_9.jpeg'),
  },
  {
    title: 'Macia enguia',
    price: 340,
    image: require('../images/images/r_10.jpeg'),
  },
];

const productsList = food.map(el => {
  return {
    ...el,
    added: false,
    cnt: 1,
    id: Math.random(),
  };
});

export default productsList;

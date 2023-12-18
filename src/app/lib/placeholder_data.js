
const user = [
  {
    id: '1',
    name: 'admin',
    admin: 'admin@testing.com',
    password: 'admin123',
  }
]

const product = [
  {
    id: '1',
    name: 'T-Shirt',
    image_url_front: '/public/t-shirt/freedom front.png',
    image_url_back: '/public/t-shirt/freedom back.png',
    price: 120000
  },
  {
    id: '2',
    name: 'T-Shirt',
    image_url_front: '/public/t-shirt/lorem front.png',
    image_url_back: '/public/t-shirt/lorem back.png',
    price: 120000
  },
  {
    id: '3',
    name: 'T-Shirt',
    image_url_front: '/public/t-shirt/prayed front.png',
    image_url_back: '/public/t-shirt/prayed back.png.png',
    price: 120000
  },
  {
    id: '4',
    name: 'T-Shirt',
    image_url_front: '/public/t-shirt/raflessia front.png',
    image_url_back: '/public/t-shirt/raflessia back.png',
    price: 120000
  },
  {
    id: '5',
    name: 'T-Shirt',
    image_url_front: '/public/t-shirt/ultraman front.png',
    image_url_back: '/public/t-shirt/ultraman back.png',
    price: 120000
  }
]

const banner = [
  {
    product_id: product[0].id,
    image: "/public/banner/Banner 1.png",
  },
  {
    product_id: product[1].id,
    image: "/public/banner/Banner 2.png",
  },
  {
    product_id:product[2].id,
    image: "/public/banner/Banner 3.png",
  },
  {
    product_id: product[3].id,
    image: "/public/banner/Banner 4.png",
  },
  {
    customer_id: product[4].id,
    image: "/public/banner/Banner 5.png",
  },
];


module.exports = {
  user,
  product,
  banner
}
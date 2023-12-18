export type user = {
    id: string;
    product_id: string;
    price: number;
    image: string
}

export type product = {
    id: string,
    name: string,
    price: number,
    image_url_front: string,
    image_url_back: string
}

export type banner = {
    id: string,
    product_id: string,
    image: string
}
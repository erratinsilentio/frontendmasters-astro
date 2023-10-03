type CartItem = {
  quantity: number;
  item: ShopItem;
};

type ShopItem = {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  price: number;
};

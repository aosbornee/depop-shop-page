type ProductType = {
  id: string;
  name: string;
  description: string;
  brand: string;
  seller: string;
  img: string;
  size: string;
  price: string;
  date: string;
  sold: boolean;
};

type ProductsType = ProductType[];

type ProductsState = {
  products: ProductsType;
};

type ProductAction = {
  type: string;
  payload: ProductsType | ProductType;
};

// eslint-disable-next-line no-unused-vars
type DispatchType = (args: ProductAction) => ProductAction;

export {
  ProductType,
  ProductsType,
  ProductsState,
  DispatchType,
  ProductAction,
};

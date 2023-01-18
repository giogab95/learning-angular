export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
}

export let products: Product[] = [
  { id: 0, name: 'test', price: 23, currency: '€', description: 'aaaa' },
  { id: 1, name: 'test1', price: 1, currency: '€', description: 'bbbb' },
  { id: 2, name: 'test2', price: 34, currency: '€', description: 'cccc' },
  { id: 3, name: 'test3', price: 1223, currency: '€', description: 'dddd' },
];

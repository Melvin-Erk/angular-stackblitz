export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 4',
    price: 400,
    description: 'Very old. Very good'
  },
  {
    id: 2,
    name: 'IPhone 11',
    price: 1200,
    description: 'Very big. Very good'
  },
  {
    id: 3,
    name: 'IPhone 15',
    price: 50000,
    description: 'Very futuristic. Very good'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

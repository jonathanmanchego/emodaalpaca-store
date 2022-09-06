import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: any;

  data = [
    {
      id:1,
      titulo: 'CARDIGAN ISIDRA',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TERRACOTAS NATURALES',
      costo: '75.00 USD',
      imagen: 'img1.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:2,
      titulo: 'CARDIGAN WHITE PRINCE',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TEÑIDOS NATURALES',
      costo: '75.00 USD',
      imagen: 'img2.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:3,
      titulo: 'SWEATER DARIEL',
      tallas: 'O/S',
      colores: 'TEÑIDOS NATURALES',
      costo: '95.00 USD',
      imagen: 'img3.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:4,
      titulo: 'CAPA WARI',
      tallas: 'O/S',
      colores: 'TERRACOTAS',
      costo: '120.00 USD',
      imagen: 'img4.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:5,
      titulo: 'CARDIGAN AMANDA',
      tallas: 'M-L-XL-XXL',
      colores: 'FRIOS CALIDOS',
      costo: '85.00 USD',
      imagen: 'img5.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:6,
      titulo: 'CARDIGAN MINI MARTINA',
      tallas: 'O/S',
      colores: 'TEÑIDOS NATURALES',
      costo: '95.00 USD',
      imagen: 'img6.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:7,
      titulo: 'CARDIGAN AMANDA',
      tallas: 'M-L-XL-XXL',
      colores: 'FRIOS CALIDOS',
      costo: '85.00 USD',
      imagen: 'img7.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:8,
      titulo: 'CAPA WARI',
      tallas: 'O/S',
      colores: 'TERRACOTAS',
      costo: '120.00 USD',
      imagen: 'img8.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:9,
      titulo: 'CARDIGAN GEORGIA',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TEÑIDOS NATURALES',
      costo: '85.00 USD',
      imagen: 'img9.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:10,
      titulo: 'CAPA IBE',
      tallas: 'O/S',
      colores: 'FRIOS CALIDOS',
      costo: '75.00 USD',
      imagen: 'img10.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:11,
      titulo: 'CARDIGAN WHITE PRINCE',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TEÑIDOS NATURALES',
      costo: '105.00 USD',
      imagen: 'img11.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:12,
      titulo: 'CAPA IBE',
      tallas: 'O/S',
      colores: 'TEÑIDOS NATURALES',
      costo: '75.00 USD',
      imagen: 'img12.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:13,
      titulo: 'CARDIGAN NICOL',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TEÑIDOS NATURALES',
      costo: '125.00 USD',
      imagen: 'img13.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:14,
      titulo: 'CARDIGAN TRINITY',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TEÑIDOS NATURALES',
      costo: '85.00 USD',
      imagen: 'img14.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:15,
      titulo: 'CARDIGAN ARIAM',
      tallas: 'S-M-L-XL-XXL',
      colores: 'TERRACOTAS NATURALES',
      costo: '82.00 USD',
      imagen: 'img15.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
    {
      id:16,
      titulo: 'VESTIDO GINA',
      tallas: 'S-M-L-XL-XXL',
      colores: 'ROJO, NEGRO, BEIGE',
      costo: '120.00 USD',
      imagen: 'img16.jpg',
      descripcion:'Está confeccionada en 100% lana alpaca. En esta oportunidad, la pureza natural y el diseño se unen en una expresión tranquila y clásica. La suavidad es extraordinaria.'
    },
  ];

  data1:any = [];
  data2:any = [];

  constructor() { 
    this.obtenerData();
  }

  obtenerData() {
    this.data = this.data;
    this.data1 = [
      this.data[11],
      this.data[8],
      this.data[2],
      this.data[14],
    ];
    this.data2 = [
      this.data[1],
      this.data[4],
      this.data[5],
      this.data[15],
    ];
  }

  // random(min:any, max:any) {
  //   return Math.floor((Math.random() * (max - min + 1)) + min);
  // }

}

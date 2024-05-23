import { Injectable } from "@angular/core";
import { Product } from "../Models/Product";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService{
products : Product[]=[

    {
        id: 1,
        name: 'Running Shoes',
        description: 'Lightweight running shoes with responsive cushioning.',
        brand: 'Nike',
        gender: 'Unisex',
        category: 'Running',
        color: ['Black','Red'],
        size: [7, 8, 9, 10, 11], // Array of available sizes
        price: 99.99,
        discountPrice:0,
        is_in_inventory: false,
        itemsleft: 20,
        imageURL: 'assets/images/nikerunningshoes.jpg'
    },
    {
        id: 2,
        name: 'Basketball Sneakers',
        description: 'High-top sneakers designed for basketball performance.',
        brand: 'Adidas',
        gender: 'Men',
        category: 'Basketball',
        color: ['Red','Black'],
        size: [8, 9, 10, 11, 12], // Array of available sizes
        price: 129.99,
        discountPrice:100.99,
        is_in_inventory: true,
        itemsleft: 15,
        imageURL: 'assets/images/basket.jpg'
    },
    { 
        id: 3,
        name: "Adidas Ultraboost",
        description: "Premium running shoes with responsive cushioning.",
        brand: "Adidas",
        gender: "Unisex",
        category: "Running",
        color: ['Black','Blue'],
        size: [8,9,10,11,12],
        price: 150,
        discountPrice:110,
        is_in_inventory: false,
        itemsleft: 20,
        imageURL: "assets/images/adidas.jpg"

    },
    {
        id: 4,
    name: "Nike Air Max 270",
    description: "Iconic lifestyle shoes with Air cushioning.",
    brand: "Nike",
    gender: "Men's",
    category: "Lifestyle",
    color: ['Red','Black'],
    size: [8,9,10,11,12],
    price: 120,
    discountPrice:80,
    is_in_inventory: true,
    itemsleft: 15,
    imageURL: "assets/images/airmax.jpg"
    },
    {
        id: 5,
    name: "New Balance Fresh Foam X",
    description: "Versatile training shoes with plush cushioning.",
    brand: "New Balance",
    gender: "Women's",
    category: "Training",
    color: ['Pink','Grey'],
    size: [8,9,10,11,12],
    price: 100,
    discountPrice:80,
    is_in_inventory: false,
    itemsleft: 25,
    imageURL: "assets/images/new balance.jpg"
    },
    {
        id: 6,
    name: "Air Max 90",
    description: "Iconic running shoes with visible Air cushioning",
    brand: "Nike",
    gender: "Unisex",
    category: "Running",
    color: ['Black','Red'],
    size: [7, 8, 9, 10, 11],
    price: 120,
    discountPrice:0,
    is_in_inventory: true,
    itemsleft: 20,
    imageURL: "assets/images/airmax2.jpg"
    },
    {
        id: 7,
    name: "Classic Leather",
    description: "Timeless leather sneakers with EVA midsole",
    brand: "Reebok",
    gender: "Men",
    category: "Casual",
    color: ['Black','Brown'],
    size: [8, 9, 10, 11, 12],
    price: 80,
    discountPrice:0,
    is_in_inventory: true,
    itemsleft: 15,
    imageURL: "assets/images/classicleather.jpg"
    },
    {
        id: 8,
    name: "Chuck Taylor All Star",
    description: "Canvas high-top sneakers with vulcanized rubber sole",
    brand: "Converse",
    gender: "Women",
    category: "Casual",
    color:['Black','Red'],
    size: [6, 7, 8, 9,11],
    price: 55,
    discountPrice:0,
    is_in_inventory: true,
    itemsleft: 10,
    imageURL: "assets/images/chucktaylor.jpg"
    },
    {
        id: 9,
    name: "Gel-Kayano 27",
    description: "Stability running shoes with Gel cushioning system",
    brand: "ASICS",
    gender: "Women",
    category: "Running",
    color: ['Black','Red','Pink'],
    size: [6, 7, 8, 9,10],
    price: 160,
    discountPrice:100,
    is_in_inventory: false,
    itemsleft: 18,
    imageURL: "assets/images/gelkayano.jpg"
    },
    {
        id: 10,
    name: "Classic Pump",
    description: "Timeless high heel pumps for elegant occasions",
    brand: "Jimmy Choo",
    gender: "Women",
    category: "Heels",
    color: ['Black','Pink','Red'],
    size: [6, 7, 8, 9, 10],
    price: 450,
    discountPrice:390,
    is_in_inventory: true,
    itemsleft: 10,
    imageURL: "assets/images/classicpump.jpg"
    },
    {
        id: 11,
        name: "Ankle Strap Sandal",
        description: "Strappy sandals with a high heel and ankle strap",
        brand: "Stuart Weitzman",
        gender: "Women",
        category: "Heels",
        color: ['Red','Black','Blue'],
        size: [6, 7, 8, 9,10],
        price: 375,
        discountPrice:300,
        is_in_inventory: true,
        itemsleft: 15,
        imageURL: "assets/images/anklestrapsandle.jpg"
    },
    {
        id: 12,
        name: "Peep Toe Bootie",
        description: "Stylish booties with peep toe design and block heel",
        brand: "Steve Madden",
        gender: "Women",
        category: "Heels",
        color:  ['Red','Black','Blue'],
        size: [7, 8, 9, 10,11],
        price: 120,
        discountPrice:100,
        is_in_inventory: false,
        itemsleft: 20,
        imageURL: "assets/images/peeptoebootie.jpg"
    },
    { 
        id: 13,
        name: "RS-X3 Puzzle",
        description: "Modern sneakers with a bold design",
        brand: "Puma",
        gender: "Unisex",
        category: "Sneakers",
        color:  ['Red','Black','Blue'],
        size: [7, 8, 9, 10, 11],
        price: 110,
        discountPrice:0,
        is_in_inventory: true,
        itemsleft: 12,
        imageURL: "assets/images/rsx3puzzle.jpg"
    },
    {
        id: 14,
        name: "Suede Classic",
        description: "Iconic retro sneakers with suede upper",
        brand: "Puma",
        gender: "Men",
        category: "Sneakers",
        color:  ['Red','Black','Blue'],
        size: [8, 9, 10, 11, 12],
        price: 80,
        discountPrice:70,
        is_in_inventory: true,
        itemsleft: 20,
        imageURL: "assets/images/suede.jpg"
    },
    {
        id: 15,
        name: "Carina",
        description: "Casual sneakers with a vintage vibe",
        brand: "Puma",
        gender: "Women",
        category: "Sneakers",
        color:  ['Red','Black','Blue','Pink'],
        size: [6, 7, 8, 9,10],
        price: 65,
        discountPrice:0,
        is_in_inventory: true,
        itemsleft: 15,
        imageURL: "assets/images/carina.jpg"
    },
    {
        id: 16,
        name: "Future Rider Twofold",
        description: "Colorful sneakers inspired by retro running shoes",
        brand: "Puma",
        gender: "Unisex",
        category: "Sneakers",
        color:  ['Red','Black','Blue'],
        size: [7, 8, 9, 10,11],
        price: 90,
        discountPrice:80,
        is_in_inventory: true,
        itemsleft: 18,
        imageURL: "assets/images/futurerider.jpg"
    },
    {
        id: 15,
        name: "Cell Venom",
        description: "Chunky sneakers with a bold '90s-inspired design",
        brand: "Puma",
        gender: "Men",
        category: "Sneakers",
        color:  ['Red','Black','Blue'],
        size: [7,8, 9, 10, 11],
        price: 120,
        discountPrice:90,
        is_in_inventory: true,
        itemsleft: 10,
        imageURL: "assets/images/cellvenom.jpg"
    },
    {
        id: 15,
        name: "Basket Heart",
        description: "Classic sneakers with a feminine twist",
        brand: "Puma",
        gender: "Women",
        category: "Sneakers",
        color:  ['Red','Black','Blue'],
        size: [6, 7, 8, 9,10],
        price: 70,
        discountPrice:0,
        is_in_inventory: false,
        itemsleft: 15,
        imageURL: "assets/images/basketheart.jpg"
    }
       
    
];

getAllProducts(){
    return new Observable<Product[]>((sub)=>{
        setTimeout(()=>{
            sub.next(this.products);
          } , 5000) 
    })
}
}
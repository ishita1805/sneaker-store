import { Filter, Product } from "../types";

const shoeSizeGuide = (metric: string = 'cm') => ({
    headers:  [
        "US-Men's",
        "US-Women's",
        "UK",
        `Foot Length (${metric})`,
    ],
    data: [
        [
            3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
            19.5, 20, 20.5, 21, 21.5, 22,
        ],
        [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
            19.5, 20, 20.5, 21, 21.5, 22, 23, 23,5
        ],
        [
            3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
            19.5, 20, 20.5, 21,
        ],
        ...[metric === 'cm' ? [
            21.6, 22, 22.4, 22.9, 23.3, 23.7, 24.1, 24.5, 25, 25.4, 25.8, 26.2, 26.7, 27.1, 27.5, 27.9, 28.3, 28.8, 29.2, 29.6, 30, 30.5, 30.9, 31.3, 31.7, 32.2, 32.6, 33, 33.4, 33.9, 34.3, 34.7, 35.1, 35.5, 36, 36.4, 36.8, 37.2
        ]: [
            '8 1/2' ,'8 11/16' ,'8 13/16' ,'9' ,'9 3/16' ,'9 5/16' ,'9 1/2' ,'9 11/16' ,'9 13/16' ,'10' ,'10 3/16' ,'10 5/16' ,'10 1/2' ,'10 11/16' ,'10 13/16' ,'11' ,'11 3/16' ,'11 5/16' ,'11 1/2' ,'11 11/16' ,'11 13/16' ,'12' ,'12 3/16' ,'12 5/16' ,'12 1/2' ,'12 11/16' ,'12 13/16' ,'13' ,'13 3/16' ,'13 5/16' ,'13 1/2' ,'13 11/16' ,'13 13/16' ,'14' ,'14 3/16' ,'14 5/16' ,'14 1/2' ,'14' ,'11/16'],
        ],
    ],
});


const shirtSizingGuide = (metric: string = 'mens') => ({
    headers:  [
        "Size",
        "Fit your chest",
        "Garment Chest",
        `Length`,
    ],
    data: metric === 'mens' ? [
        ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        [36, 38, 40, 42, 44, 46],
        [42, 44, 46, 48, 50, 52],
        [27, 27.5, 28, 29, 29.5, 30],
    ] : [
        ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        [36, 38, 40, 42, 44, 46],
        [42, 44, 46, 48, 50, 52],
        [27, 27.5, 28, 29, 29.5, 30],
    ],
});


// NOTE(ishita1805):Format for Product-ID: <brand>-<theme>-<product>
const products: Product[] = [
    {
        id: 'nike-greenday-slides',
        tags: 'nikeslidesslipperwhitefootweargreenday21stcenturyslidedownamericanidotdookiunodostresradiorevolutionrockpunkbandmusic',
        label: '21st Century Slide Down',
        cost: 8000,
        designCost: 4500,
        limited: true,
        metric: ['in', 'cm'],
        discount: 0.2,
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Step into comfort with a nod to rock history in these Green Day-inspired Nike Calm Slides. Featuring iconic logos from some of the band’s most legendary albums and songs, these slides let you carry the punk spirit wherever you go.',
        pictures: ['https://lh3.google.com/u/0/d/1nTuCwp3aDQnqxTaiL18OjTlOjDdizf4Y', 'https://lh3.google.com/u/0/d/1F-l3iau4geebd69kyjgcNzM4djkZj83F', 'https://lh3.google.com/u/0/d/1tTWv2Bg3GrtWzH8m7DH9BOzCowKhh644'],
        category: 'sneakers',
        date: new Date('2025-01-15'),
    },
    {
        id: 'porsche-911-sneakers',
        tags: 'nikesneakerslowskicksshoescarssportsdunksporsce911gtamostwantedhotpursuit',
        label: '911 Hot Pursuit Dunks',
        cost: 34000,
        metric: ['in', 'cm'],
        designCost: 22000,
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Embrace the fusion of streetwear and motorsport with these sleek Porsche 911-inspired sneakers. One side boasts pixel art of the car, while bold curves and racing details define the other. Crafted from premium materials in metallic gray, jet black, and fiery red, they\'re perfect for speed lovers and sneakerheads',
        pictures: ['https://lh3.google.com/u/0/d/1iakqS5KN1WwWpv3c4T_mlJx8sIWROFJT', 'https://lh3.google.com/u/0/d/1AVQeSSmZSaUTwBAbCuWeKSBDRm7edcw4', 'https://lh3.google.com/u/0/d/1QXiaswndpgZJM1-sZfga7v2-sjC68jc-'],
        category: 'sneakers',
        date: new Date('2025-01-04'),
    },
    {
        id: 'bmw-m3-sneakers',
        tags: 'nikesneakerslowskicksshoescarssportsairforceonesaf1smostwantedbmwm3gtam3m2m5',
        label: 'Air Force Most Wanted',
        cost: 31000,
        designCost: 22000,
        metric: ['in', 'cm'],
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Tribute to the iconic BMW M3, this sneaker blends precision and performance. One side showcases a detailed sketch of the car, while the other incorporates elements inspired by the kidney grilles, GT engine, and the signature M3 logo on the Swoosh. Finished with “BMW” lettered in German, it’s a must-have for Motorheads and sneaker enthusiasts alike.',
        pictures: ['https://lh3.google.com/u/0/d/1TS3GJL1v8hxgbSLLAwgESYSc5g0QFCxh', 'https://lh3.google.com/u/0/d/1WE6WtuKzjOVlBBXOeOxL1w6n3u3UIEw2', 'https://lh3.google.com/u/0/d/1d64-ofwKc0PFWivSmz6UXLtrKBAmgYCg'],
        category: 'sneakers',
        date: new Date('2024-12-31'),
    },
    {
        id: 'hnm-full-metal-alchemist-hoodie',
        tags: 'fullmetalbrotherhoodiefullmetalalchemistanimeclotheswinterwhite',
        label: 'Full Metal Brotherhood-ie',
        cost: 8000,
        designCost: 6000,
        metric: ['Men', 'Women'],
        sizes: [{ label: 'XS', id: 'xs'},{ label: 'S', id: 's'},{ label: 'M', id: 'm'},{ label: 'L', id: 'l'},{ label: 'XL', id: 'xl'},{ label: 'XXL', id: 'xxl'},],
        sizeGuide: shirtSizingGuide,
        description: 'This hand-painted Fullmetal Alchemist-themed hoodie is a wearable masterpiece. The front displays the wearer’s name in Japanese, with an embroidered English version on the sleeve. The back showcases a striking, detailed sketch of the iconic red-clad knight in bold red, white, and black hues—perfect for anime lovers seeking a unique statement piece.',
        pictures: ['https://lh3.google.com/u/0/d/1vNOFymbLoKLu1l5FTJ42eG_wVfSxUyud', 'https://lh3.google.com/u/0/d/1Txiv35soO3ibgGtCmwOqhnxGXwXigEft'],
        category: 'hoodies',
        date: new Date('2024-12-28'),
    },
    {
        id: 'nike-batman-joker-sneakers',
        tags: 'mikeairvengeance1sbatmanjokeraf1forceoneonessneakerslowskicksshoes',
        label: 'Air Vengeance 1s',
        cost: 22000,
        metric: ['in', 'cm'],
        designCost: 14000,
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Step into Gotham with these bold mismatched AF1s. Bat-shaped Swooshes grace the inner sides, while Batman and Joker sketches define the outer. A playful red Batman logo on the toe box adds chaotic flair. Finished with thick rope laces, they capture Gotham’s dark and wild energy.',
        pictures: ['https://lh3.google.com/u/0/d/1aem7XSTBs9pFl0dhohcc8G_7Zn89pZDS', 'https://lh3.google.com/u/0/d/1Sh3MJsplLJpUMcnA5ag_j-0U1fP37hDM', 'https://lh3.google.com/u/0/d/140EpuZvSjG_o6Ks2LQJTi9Pp2CS7-wUv'],
        category: 'sneakers',
        date: new Date('2024-11-16'),
    },
   
    {
        id: 'nike-buttercup-sneakers',
        tags: 'niketoughpuffaf1ssairforceonesbuttercupsneakerspowerpuffgirlslowsshoeskicks',
        label: 'Tough Puff AF1s',
        designCost: 14000,
        cost: 22000,
        metric: ['in', 'cm'],
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Unleash your inner brat with these bold AF1s inspired by Buttercup. Outer sides boast rebellious visuals, while inner sides rock checkered patterns and pink fire on the heel. A goggle-shaped Swoosh and green heart toe box add flair, finished with tie-dye laces for the perfect sass and style.',
        pictures: ['https://lh3.google.com/u/0/d/1_R0T5C4NbF4tehTc8RN0sJQihOj7Lrpu', 'https://lh3.google.com/u/0/d/1Aj6nJOvmBq1ItTvqqmZ6TmQUXumYBGyB', 'https://lh3.google.com/u/0/d/1I2Q7mHB5gB1Jnnr0Otcb4awYMMd5U21H'],
        category: 'sneakers',
        date: new Date('2024-11-8'),
    },
    {
        id: 'nike-miles-morales-sneakers',
        tags: 'intothenikeverseaf1sairforce1onessneakersspidermanlowsshoeskicks',
        label: 'Into the Nikeverse AF1s',
        designCost: 10000 ,
        cost: 17000,
        metric: ['in', 'cm'],
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Embrace hero-villain vibes with these mismatched kicks inspired by Miles Morales and the Prowler. One side channels Spider-Man, the other the Prowler’s edge. A glitch-effect spider on the toe box and spray-painted tongue logo make them a streetwear standout.',
        pictures: ['https://lh3.google.com/u/0/d/15B8o3WmwUayHR9cCNbroKHwVC9t8F3Ch', 'https://lh3.google.com/u/0/d/1AHR2u7QRWVgDA271RmSGh2pkqeKDl9fM', 'https://lh3.google.com/u/0/d/1hIEDIA2yp4tnpKqmLwcL-7k-H1T7YC0V'],
        category: 'sneakers',
        date: new Date('2024-10-25'),
    },
    {
        id: 'nike-dany-phantom-danny-sneakers',
        tags: 'dannyphantomaamaneakerscouplesneakerairjordansonesaj1ssneakerscomicanimenikehighstopskicksshoes',
        label: 'Phantom Jordan 1s',
        designCost: 18000,
        metric: ['in', 'cm'],
        cost: 27000,
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Step up your style with these bold AJ1s featuring bratty sketches of Danny on the inner side. Black and purple color blocking meets a playful purple-and-white tongue and mismatched laces. Finished with sleek black outer soles, these kicks are a mischievous statement for any duo.',
        pictures: ['https://lh3.google.com/u/0/d/1QRk5i7ddUFpKJJsj9WbKLw3qfR_HHKQ5', 'https://lh3.google.com/u/0/d/1IF7qOmepWWLDjAMiIE7yqjBnPqrqqkmh'],
        category: 'sneakers',
        date: new Date('2024-01-27'),
    },
    {
        id: 'nike-dany-phantom-sam-sneakers',
        tags: 'dannyphantomaamaneakerscouplesneakerairjordansonesaj1ssneakerscomicanimenikehighstopskicksshoes',
        label: 'Dead Girl Jordan 1s',
        designCost: 18000,
        metric: ['in', 'cm'],
        cost: 27000,
        sizes: [{ label: 'UK 6', id: 'uk6'},{ label: 'UK 7', id: 'uk7'},{ label: 'UK 8', id: 'uk8'},{ label: 'UK 9', id: 'uk9'},{ label: 'UK 10', id: 'uk10'},{ label: 'UK 11', id: 'uk11'}],
        sizeGuide: shoeSizeGuide,
        description: 'Channel your playful side with these AJ1s showcasing a bratty sketch of Sam on the inner side. The striking black and purple design pairs perfectly with a vibrant tongue and mismatched laces. Black outer soles tie it all together for a bold couple\'s vibe.',
        pictures: ['https://lh3.google.com/u/0/d/1_RG6ml6NFmAc23A4yIqzy9rv5BYC4E4Z', 'https://lh3.google.com/u/0/d/1VIJPwuCj_YzkZDHvBSEDHbPQHitfFRiF'],
        category: 'sneakers',
        date: new Date('2024-01-27'),
    },
   
];

const normalize = (str: string) => str.toLowerCase().replace(/['"]+/g, '').split(/\s+/);


export const searchProducts = (arr:Product[], query: string): Product[] => {
    const normalizedQueryWords = normalize(query);
    
    return arr.filter(item => {
        return normalizedQueryWords.some(word => item.tags.includes(word));
      });
    
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterFn = (arr: any[], key: keyof Product, val: any) => {
    if (val === 'default') return arr;
    return arr.filter(x => x[key] === val)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortingFn = (arr: any[], key: Filter) => {
    if (key === 'high-to-low') {
        return arr.sort((a, b) => b.cost - a.cost);
    }
    if (key === 'low-to-high') {
        return arr.sort((a, b) => a.cost - b.cost);
    }
    return arr.sort((a, b) => {       
        return b.date - a.date;
    });
}

export default products;
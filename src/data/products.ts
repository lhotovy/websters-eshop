type Product = {
  id: number;
  title: string;
  name: string;
  image: string;
  info: string;
  price: number;
}

export const products: Product[] = [
    {
        id: 1,
        title: "cup",
        name: "Wooden cuppery",
        image: "/cup.jpg",
        info: "Our Wooden Cups are meticulously handcrafted by skilled artisans who possess a deep reverence for woodworking. Using only the finest quality wood, they skillfully shape and carve each cup, ensuring exceptional craftsmanship and attention to detail. The result is a stunning masterpiece that showcases the natural beauty of the wood while providing a durable and functional vessel for your beverages.",
        price: 10
    },
    {
        id: 2,
        title: "carvings",
        name: "3D Wood carvings",
        image: "/carving.jpg",
        info: "Introducing our collection of exquisite Wooden Carvings, where the art of carving merges with the natural allure of wood to create captivating pieces that inspire awe and admiration. Each carving is meticulously crafted by skilled artisans, showcasing the intricacy of their craft and the inherent beauty of the wood.",
        price: 50
    },
    {
        id: 3,
        title: "vase",
        name: "Wooden vase",
        image: "/vase.jpg",
        info: "Introducing the Exquisite Wooden Vase: A Timeless Blend of Elegance and Nature. Enhance your living space with the captivating beauty of our Wooden Vase, a true masterpiece crafted with precision and care. Handmade by skilled artisans, this stunning centerpiece effortlessly combines the warmth of natural wood with the elegance of modern design, adding a touch of sophistication to any room.",
        price: 15
    },
    {
        id: 4,
        title: "chess",
        name: "Wooden chess",
        image: "/chess.jpg",
        info: "Introducing our exquisite Wooden Chess Set, a timeless classic that combines the artistry of craftsmanship with the strategic depth of the game of kings. Meticulously handcrafted using premium wood, this chess set is designed to bring endless hours of intellectual challenge and aesthetic pleasure to chess enthusiasts of all levels.",
        price: 100
    },
    {
        id: 5,
        title: "candleHolder",
        name: "Candle holder",
        image: "/candleHolder.jpg",
        info: "Introducing our collection of beautifully crafted Wooden Candle Holders, designed to enhance the soothing glow of candlelight and add a touch of natural elegance to your space. Each candle holder is meticulously handcrafted from premium wood, showcasing the perfect blend of artistry and functionality.",
        price: 10
    },
    {
        id: 6,
        title: "sign",
        name: "Custom wood sign",
        image: "/sign.jpg",
        info: "Introducing our exquisite collection of Wooden Signs, where craftsmanship meets personalization to create stunning pieces that make a statement. Each sign is handcrafted with meticulous care, combining the natural beauty of wood with the uniqueness of your chosen design, transforming your space into a reflection of your style and personality.",
        price: 30
    },
]
export type Destination = {
  name: string;
  image: string;
  position: string;
  delay: string;
  size: string;
};

export const floatingDestinations: Destination[] = [
  // TOP LEFT CLUSTER - Strategic corner positioning
  {
    name: "Valmiki Tiger Reserve",
    image:
      "https://valmikitigerreserve.com/wp-content/uploads/2022/09/img_3_1663181592805.webp?q=80&w=400&auto=format&fit=crop",
    position: "top-6 left-6 sm:top-8 sm:left-8",
    delay: "0s",
    size: "w-16 h-16 sm:w-20 sm:h-20",
  },
  {
    name: "Valmiki Logo",
    image: "https://www.iasgyan.in/ig-uploads/images/VALMIKI_TIGER_RESERVE.png",
    position: "top-28 left-2 sm:top-32 sm:left-4",
    delay: "0.4s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  {
    name: "Forest Trail",
    image:
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/vtr-west-champaran.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg?q=80&w=400&auto=format&fit=crop",
    position: "top-20 left-20 sm:top-24 sm:left-28",
    delay: "1.2s",
    size: "w-12 h-12 sm:w-16 sm:h-16",
  },

  // TOP RIGHT CLUSTER - Balanced corner arrangement
  {
    name: "Nepal Border Bridge",
    image:
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_01.jpg?q=80&w=400&auto=format&fit=crop",
    position: "top-6 right-6 sm:top-8 sm:right-8",
    delay: "0.2s",
    size: "w-14 h-14 sm:w-18 sm:h-18",
  },
  {
    name: "Open Safari",
    image:
      "https://www.travelbaits.in/wp-content/uploads/2020/02/Open-Safari.jpg",
    position: "top-28 right-2 sm:top-32 sm:right-4",
    delay: "0.8s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  {
    name: "Waterfall Clip",
    image: "https://i.ytimg.com/vi/IlOjSTT44aE/hqdefault.jpg",
    position: "top-20 right-20 sm:top-24 sm:right-28",
    delay: "1.6s",
    size: "w-10 h-10 sm:w-12 sm:h-12",
  },

  // LEFT SIDE VERTICAL ARRANGEMENT - Organized progression
  {
    name: "Tigers in Brush",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.M6TzsEN_2ZP5FLI9K-BdIgHaEM?pid=Api&P=0&h=180",
    position: "top-52 left-4 sm:top-64 sm:left-6",
    delay: "1.1s",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  {
    name: "Trail View",
    image:
      "https://media2.thrillophilia.com/images/photos/000/373/501/original/1622523885_1611315075_1467626905_k1.JPG.jpg.jpg?gravity=center&width=752&height=450&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    position: "top-72 left-2 sm:top-84 sm:left-4",
    delay: "1s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  {
    name: "Gandaki River",
    image:
      "https://i.ytimg.com/vi/la2TD62--0A/maxresdefault.jpg?q=80&w=400&auto=format&fit=crop",
    position: "top-96 left-6 sm:top-[440px] sm:left-8",
    delay: "1s",
    size: "w-16 h-16 sm:w-18 sm:h-18",
  },

  // RIGHT SIDE VERTICAL ARRANGEMENT - Mirror the left side
  {
    name: "River Crossing",
    image:
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_01.jpg?q=80&w=400&auto=format&fit=crop",
    position: "top-52 right-4 sm:top-64 sm:right-6",
    delay: "1.4s",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  {
    name: "Open Plains",
    image:
      "https://media2.thrillophilia.com/images/photos/000/373/536/original/1622526611_shutterstock_1594833985.jpg?w=753&h=450&dpr=1.5",
    position: "top-72 right-2 sm:top-84 sm:right-4",
    delay: "0.8s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  {
    name: "Safari Panorama",
    image:
      "https://media2.thrillophilia.com/images/photos/000/373/504/original/1622524429_shutterstock_1270863214.jpg?gravity=center&width=752&height=450&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    position: "top-96 right-6 sm:top-[440px] sm:right-8",
    delay: "1.8s",
    size: "w-18 h-18 sm:w-20 sm:h-20",
  },
  // BOTTOM LEFT CLUSTER - Organized lower corner
  {
    name: "Valmiki Snapshot",
    image:
      "https://valmikitigerreserve.com/wp-content/uploads/2022/03/32-266x200_c.jpg",
    position: "bottom-8 left-6 sm:bottom-12 sm:left-8",
    delay: "0.6s",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  {
    name: "Campfire Night",
    image:
      "https://i.pinimg.com/736x/3d/3d/aa/3d3daa87a2f8457f3170af68159069d2.jpg",
    position: "bottom-28 left-2 sm:bottom-32 sm:left-4",
    delay: "1.5s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  {
    name: "Jungle Camp",
    image:
      "https://valmikitigerreserve.com/wp-content/uploads/2022/08/Jungle-Camp-Campus-min-1024x683.jpg",
    position: "bottom-8 left-22 sm:bottom-12 sm:left-28",
    delay: "0.5s",
    size: "w-16 h-16 sm:w-18 sm:h-18",
  },

  // BOTTOM RIGHT CLUSTER - Balanced final corner
  {
    name: "River Adventure",
    image:
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_01.jpg?q=80&w=400&auto=format&fit=crop",
    position: "bottom-8 right-6 sm:bottom-12 sm:right-8",
    delay: "0.3s",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  {
    name: "Wildlife Explorer",
    image:
      "https://www.travelbaits.in/wp-content/uploads/2020/02/Open-Safari.jpg",
    position: "bottom-28 right-2 sm:bottom-32 sm:right-4",
    delay: "1.3s",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  
  
];

export const fixedWidth = 546;
export const resources = [
  {
    title: "Energy Efficiency at Home",
    image: "/energy.jpg",
    description:
      "Reduce your energy consumption by making smart upgrades at home. Learn about switching to LED bulbs, installing smart thermostats, and choosing energy-efficient appliances. Understand how proper insulation, regular maintenance, and using natural light can lower energy bills and decrease your carbon footprint.",
  },
  {
    title: "Sustainable Transportation",
    image: "/transport.jpeg",
    description:
      "Adopt sustainable transportation methods to significantly reduce emissions. This tip covers the benefits of public transit, carpooling, cycling, and walking. It includes practical advice on planning routes, choosing hybrid or electric vehicles, and the long-term cost savings and health benefits of reducing car dependence.",
  },
  {
    title: "Waste Reduction and Recycling",
    image: "/recycle.jpg",
    description:
      "Minimize your household waste by adopting recycling and upcycling practices. Get detailed guidance on sorting recyclables, reducing single-use plastics, and setting up a compost system. This resource offers actionable steps to transition to a zero-waste lifestyle, including ideas for repurposing common items and community recycling initiatives.",
  },
  {
    title: "Green Lifestyle and Community Engagement",
    image: "/community.jpg",
    description:
      "Embrace a comprehensive approach to sustainable living by integrating eco-friendly habits into all aspects of your life. Discover how to reduce personal waste, support local environmental initiatives, and participate in community projects. This long-form guide explains the value of local activism, sustainable consumer choices, and collaborative efforts to drive systemic change.",
  },
  {
    title: "Eco-Friendly Food Choices",
    image: "/food.jpg",
    description:
      "Transform your diet with sustainable food practices. Explore the benefits of choosing locally sourced and organic produce, reducing meat consumption, and supporting sustainable agriculture. This guide provides long-form advice on seasonal eating, reducing food waste through smart meal planning, and understanding the environmental impact of food production.",
  },
  {
    title: "Water Conservation Techniques",
    image: "/water.jpeg",
    description:
      "Learn practical methods to conserve water in your everyday life. This resource covers everything from installing low-flow fixtures and rainwater harvesting systems to smart irrigation practices and regular leak checks. It details how small changes can lead to substantial water savings, benefiting both your wallet and the environment.",
  },
];

export const activities = [
  // kg CO₂e per unit event
  {
    id: 1,
    type: "Transportation",
    carbonValue: 6,
  },
  {
    id: 2,
    type: "Residential Energy",
    carbonValue: 12,
  },
  {
    id: 3,
    type: "Food Consumption",
    carbonValue: 3,
  },
  {
    id: 4,
    type: "Waste Generation",
    carbonValue: 0.3,
  },
  {
    id: 5,
    type: "Water Usage",
    carbonValue: 0.05,
  },
  {
    id: 6,
    type: "Consumer Goods",
    carbonValue: 1,
  },
  {
    id: 7,
    type: "Clothing",
    carbonValue: 5,
  },
  {
    id: 8,
    type: "Electronics",
    carbonValue: 0.5,
  },
  {
    id: 9,
    type: "Air Travel",
    carbonValue: 25,
  },
  {
    id: 10,
    type: "Entertainment",
    carbonValue: 0.5,
  },
];

export const guidelines = [
  { label: "Low", range: "up to 100 kg/week" },
  { label: "Medium", range: "100 – 200 kg/week" },
  { label: "High", range: "above 200 kg/week" },
];

export interface Activity {
  name: string;
  date: string;
  type: string;
  avgCarbon: number;
}

interface TableHeader {
  label: string;
  key: keyof Activity;
}

export const headers: TableHeader[] = [
  { label: "Activity Name", key: "name" },
  { label: "Date", key: "date" },
  { label: "Type", key: "type" },
  { label: "Avg. Carbon Produced", key: "avgCarbon" },
];

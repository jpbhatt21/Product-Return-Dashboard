import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Components/Card";

function App() {
	const [count, setCount] = useState(0);
	let arr =[
    {
      "user": "alice_w",
      "uid": 1002,
      "item": "Smartphone",
      "cost": 20000,
      "order_date": "05/08/24",
      "status": "return",
      "reason": "Screen defect",
      "recommendation": "rejected",
      "item_rtrp": [8, 5],
      "user_data": {
        "aov": { "td": 15000, "lt": 12000 },
        "rtrpc": { "td": [35, 25], "lt": [20, 22] },
        "rtrpv": { "td": [32, 28], "lt": [30, 22] }
      }
    },
    {
      "user": "bob_c",
      "uid": 1003,
      "item": "Laptop",
      "cost": 45000,
      "order_date": "21/07/24",
      "status": "replace",
      "reason": "Keyboard issue",
      "recommendation": "rejected",
      "item_rtrp": [5, 15],
      "user_data": {
        "aov": { "td": 32000, "lt": 28000 },
        "rtrpc": { "td": [28, 45], "lt": [35, 40] },
        "rtrpv": { "td": [25, 45], "lt": [38, 42] }
      }
    },
    {
      "user": "charles_d",
      "uid": 1004,
      "item": "Headphones",
      "cost": 2500,
      "order_date": "19/08/24",
      "status": "return",
      "reason": "Poor sound quality",
      "recommendation": "rejected",
      "item_rtrp": [9, 3],
      "user_data": {
        "aov": { "td": 3000, "lt": 2900 },
        "rtrpc": { "td": [40, 22], "lt": [35, 28] },
        "rtrpv": { "td": [45, 15], "lt": [40, 20] }
      }
    },
    {
      "user": "dana_e",
      "uid": 1005,
      "item": "Tablet",
      "cost": 18000,
      "order_date": "25/07/24",
      "status": "replace",
      "reason": "Display problem",
      "recommendation": "approved",
      "item_rtrp": [4, 9],
      "user_data": {
        "aov": { "td": 17500, "lt": 16000 },
        "rtrpc": { "td": [22, 18], "lt": [19, 20] },
        "rtrpv": { "td": [25, 18], "lt": [22, 18] }
      }
    },
    {
      "user": "eric_f",
      "uid": 1006,
      "item": "Smartwatch",
      "cost": 12000,
      "order_date": "10/08/24",
      "status": "return",
      "reason": "Charging issue",
      "recommendation": "rejected",
      "item_rtrp": [6, 4],
      "user_data": {
        "aov": { "td": 11000, "lt": 10500 },
        "rtrpc": { "td": [34, 45], "lt": [33, 38] },
        "rtrpv": { "td": [35, 42], "lt": [32, 40] }
      }
    },
    {
      "user": "fiona_g",
      "uid": 1007,
      "item": "Bluetooth Speaker",
      "cost": 3500,
      "order_date": "08/08/24",
      "status": "replace",
      "reason": "Bluetooth connectivity issue",
      "recommendation": "approved",
      "item_rtrp": [40, 30],
      "user_data": {
        "aov": { "td": 3200, "lt": 3000 },
        "rtrpc": { "td": [22, 35], "lt": [20, 38] },
        "rtrpv": { "td": [26, 30], "lt": [29, 31] }
      }
    },
    {
      "user": "george_h",
      "uid": 1008,
      "item": "Wireless Earbuds",
      "cost": 4000,
      "order_date": "11/08/24",
      "status": "return",
      "reason": "Sound imbalance",
      "recommendation": "rejected",
      "item_rtrp": [7, 6],
      "user_data": {
        "aov": { "td": 3500, "lt": 3700 },
        "rtrpc": { "td": [33, 25], "lt": [28, 30] },
        "rtrpv": { "td": [31, 20], "lt": [30, 25] }
      }
    },{
      "user": "hannah_i",
      "uid": 1009,
      "item": "Gaming Mouse",
      "cost": 2500,
      "order_date": "20/07/24",
      "status": "replace",
      "reason": "Faulty buttons",
      "recommendation": "approved",
      "item_rtrp": [40, 30],
      "user_data": {
        "aov": { "td": 2300, "lt": 2200 },
        "rtrpc": { "td": [25, 30], "lt": [28, 30] },
        "rtrpv": { "td": [20, 35], "lt": [22, 32] }
      }
    },
    {
      "user": "isla_j",
      "uid": 1010,
      "item": "Smart TV",
      "cost": 55000,
      "order_date": "15/08/24",
      "status": "return",
      "reason": "Picture quality issue",
      "recommendation": "rejected",
      "item_rtrp": [8, 5],
      "user_data": {
        "aov": { "td": 53000, "lt": 52000 },
        "rtrpc": { "td": [32, 38], "lt": [34, 42] },
        "rtrpv": { "td": [33, 37], "lt": [35, 40] }
      }
    },
    {
      "user": "jack_k",
      "uid": 1011,
      "item": "Vacuum Cleaner",
      "cost": 15000,
      "order_date": "10/08/24",
      "status": "replace",
      "reason": "Low suction power",
      "recommendation": "approved",
      "item_rtrp": [45, 22],
      "user_data": {
        "aov": { "td": 14000, "lt": 13500 },
        "rtrpc": { "td": [28, 32], "lt": [24, 30] },
        "rtrpv": { "td": [29, 25], "lt": [32, 30] }
      }
    },
    {
      "user": "karen_l",
      "uid": 1012,
      "item": "Refrigerator",
      "cost": 30000,
      "order_date": "12/07/24",
      "status": "return",
      "reason": "Cooling issue",
      "recommendation": "rejected",
      "item_rtrp": [7, 4],
      "user_data": {
        "aov": { "td": 29000, "lt": 28000 },
        "rtrpc": { "td": [35, 32], "lt": [30, 33] },
        "rtrpv": { "td": [38, 35], "lt": [33, 30] }
      }
    },
    {
      "user": "liam_m",
      "uid": 1013,
      "item": "Air Conditioner",
      "cost": 45000,
      "order_date": "08/08/24",
      "status": "replace",
      "reason": "Not cooling",
      "recommendation": "approved",
      "item_rtrp": [35, 33],
      "user_data": {
        "aov": { "td": 43000, "lt": 42000 },
        "rtrpc": { "td": [20, 35], "lt": [25, 30] },
        "rtrpv": { "td": [28, 40], "lt": [25, 38] }
      }
    },
    {
      "user": "mike_n",
      "uid": 1014,
      "item": "Coffee Machine",
      "cost": 8000,
      "order_date": "07/08/24",
      "status": "return",
      "reason": "Water leakage",
      "recommendation": "rejected",
      "item_rtrp": [6, 5],
      "user_data": {
        "aov": { "td": 7800, "lt": 7600 },
        "rtrpc": { "td": [33, 22], "lt": [32, 26] },
        "rtrpv": { "td": [35, 25], "lt": [34, 27] }
      }
    },
    {
      "user": "nina_o",
      "uid": 1015,
      "item": "Refrigerator",
      "cost": 35000,
      "order_date": "18/08/24",
      "status": "replace",
      "reason": "Cooling problem",
      "recommendation": "approved",
      "item_rtrp": [40, 30],
      "user_data": {
        "aov": { "td": 34000, "lt": 33000 },
        "rtrpc": { "td": [22, 35], "lt": [20, 38] },
        "rtrpv": { "td": [26, 30], "lt": [29, 31] }
      }
    }
    ]
    
  
  
  
  
    
	let cards = arr.map((x, i) => {
    //x.item_rtrp=arr[0].item_rtrp
    x.user=x.user_data
  return <Card key={i} data={x} />});
  
	return (
		<>
			<div
				onScroll={(e) => {
					
				}}
				className="fixed bg-light-1 h-full w-full overflow-y-scroll  justify-center flex flex-wrap gap-5">
				<div className="sticky top-0 z-10 w-full backdrop-blur-md duration-300 h-16 bg-dark-1 bg-opacity- 80 "></div>
				{cards}
			</div>
		</>
	);
}

export default App;

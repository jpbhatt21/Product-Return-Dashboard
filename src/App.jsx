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
        "item_return_percentage": "8%",
        "item_replace_percentage": "5%",
        "past_thirty_days_user_stats": {
            "average_order_value": 15000,
            "order_return_rate": "35%",
            "order_replacement_rate": "25%",
            "unreturned_orders": 65  
        },
        "lifetime_user_stats": {
            "average_order_value": 12000,
            "order_return_rate": "32%",
            "order_replacement_rate": "28%",
            "unreturned_orders": 68  
        },
        "membership": false  
    },
    {
        "user": "bob_c",
        "uid": 1003,
        "item": "Laptop",
        "cost": 45000,
        "order_date": "21/07/24",
        "status": "replace",
        "reason": "Keyboard issue",
        "item_return_percentage": "5%",
        "item_replace_percentage": "15%",
        "past_thirty_days_user_stats": {
            "average_order_value": 32000,
            "order_return_rate": "28%",
            "order_replacement_rate": "45%",
            "unreturned_orders": 72  
        },
        "lifetime_user_stats": {
            "average_order_value": 28000,
            "order_return_rate": "25%",
            "order_replacement_rate": "40%",
            "unreturned_orders": 75  
        },
        "membership": true  
    },
    {
        "user": "charles_d",
        "uid": 1004,
        "item": "Headphones",
        "cost": 2500,
        "order_date": "19/08/24",
        "status": "return",
        "reason": "Poor sound quality",
        "item_return_percentage": "9%",
        "item_replace_percentage": "3%",
        "past_thirty_days_user_stats": {
            "average_order_value": 3000,
            "order_return_rate": "40%",
            "order_replacement_rate": "22%",
            "unreturned_orders": 60  
        },
        "lifetime_user_stats": {
            "average_order_value": 2900,
            "order_return_rate": "45%",
            "order_replacement_rate": "15%",
            "unreturned_orders": 55  
        },
        "membership": false  
    },
    {
        "user": "dana_e",
        "uid": 1005,
        "item": "Tablet",
        "cost": 18000,
        "order_date": "25/07/24",
        "status": "replace",
        "reason": "Display problem",
        "item_return_percentage": "4%",
        "item_replace_percentage": "9%",
        "past_thirty_days_user_stats": {
            "average_order_value": 17500,
            "order_return_rate": "22%",
            "order_replacement_rate": "18%",
            "unreturned_orders": 78  
        },
        "lifetime_user_stats": {
            "average_order_value": 16000,
            "order_return_rate": "25%",
            "order_replacement_rate": "18%",
            "unreturned_orders": 72  
        },
        "membership": true  
    },
    {
        "user": "eric_f",
        "uid": 1006,
        "item": "Smartwatch",
        "cost": 12000,
        "order_date": "10/08/24",
        "status": "return",
        "reason": "Charging issue",
        "item_return_percentage": "6%",
        "item_replace_percentage": "4%",
        "past_thirty_days_user_stats": {
            "average_order_value": 11000,
            "order_return_rate": "34%",
            "order_replacement_rate": "45%",
            "unreturned_orders": 66  
        },
        "lifetime_user_stats": {
            "average_order_value": 10500,
            "order_return_rate": "35%",
            "order_replacement_rate": "42%",
            "unreturned_orders": 70  
        },
        "membership": false  
    },
    {
        "user": "fiona_g",
        "uid": 1007,
        "item": "Bluetooth Speaker",
        "cost": 3500,
        "order_date": "08/08/24",
        "status": "replace",
        "reason": "Bluetooth connectivity issue",
        "item_return_percentage": "40%",
        "item_replace_percentage": "30%",
        "past_thirty_days_user_stats": {
            "average_order_value": 3200,
            "order_return_rate": "22%",
            "order_replacement_rate": "35%",
            "unreturned_orders": 78  
        },
        "lifetime_user_stats": {
            "average_order_value": 3000,
            "order_return_rate": "26%",
            "order_replacement_rate": "30%",
            "unreturned_orders": 74  
        },
        "membership": true  
    },
    {
        "user": "george_h",
        "uid": 1008,
        "item": "Wireless Earbuds",
        "cost": 4000,
        "order_date": "11/08/24",
        "status": "return",
        "reason": "Sound imbalance",
        "item_return_percentage": "7%",
        "item_replace_percentage": "6%",
        "past_thirty_days_user_stats": {
            "average_order_value": 3500,
            "order_return_rate": "33%",
            "order_replacement_rate": "25%",
            "unreturned_orders": 67  
        },
        "lifetime_user_stats": {
            "average_order_value": 3700,
            "order_return_rate": "31%",
            "order_replacement_rate": "20%",
            "unreturned_orders": 68  
        },
        "membership": false  
    },
    {
        "user": "hannah_i",
        "uid": 1009,
        "item": "Gaming Mouse",
        "cost": 2500,
        "order_date": "20/07/24",
        "status": "replace",
        "reason": "Faulty buttons",
        "item_return_percentage": "40%",
        "item_replace_percentage": "30%",
        "past_thirty_days_user_stats": {
            "average_order_value": 2300,
            "order_return_rate": "25%",
            "order_replacement_rate": "30%",
            "unreturned_orders": 75  
        },
        "lifetime_user_stats": {
            "average_order_value": 2200,
            "order_return_rate": "20%",
            "order_replacement_rate": "35%",
            "unreturned_orders": 80  
        },
        "membership": true  
    },
    {
        "user": "isla_j",
        "uid": 1010,
        "item": "Smart TV",
        "cost": 55000,
        "order_date": "15/08/24",
        "status": "return",
        "reason": "Picture quality issue",
        "item_return_percentage": "8%",
        "item_replace_percentage": "5%",
        "past_thirty_days_user_stats": {
            "average_order_value": 53000,
            "order_return_rate": "32%",
            "order_replacement_rate": "38%",
            "unreturned_orders": 68  
        },
        "lifetime_user_stats": {
            "average_order_value": 52000,
            "order_return_rate": "33%",
            "order_replacement_rate": "37%",
            "unreturned_orders": 72  
        },
        "membership": false  
    },
    {
        "user": "jack_k",
        "uid": 1011,
        "item": "Vacuum Cleaner",
        "cost": 15000,
        "order_date": "10/08/24",
        "status": "replace",
        "reason": "Low suction power",
        "item_return_percentage": "45%",
        "item_replace_percentage": "22%",
        "past_thirty_days_user_stats": {
            "average_order_value": 14000,
            "order_return_rate": "28%",
            "order_replacement_rate": "32%",
            "unreturned_orders": 72  
        },
        "lifetime_user_stats": {
            "average_order_value": 13500,
            "order_return_rate": "29%",
            "order_replacement_rate": "25%",
            "unreturned_orders": 71  
        },
        "membership": true  
    },
    {
        "user": "karen_l",
        "uid": 1012,
        "item": "Refrigerator",
        "cost": 30000,
        "order_date": "12/07/24",
        "status": "return",
        "reason": "Cooling issue",
        "item_return_percentage": "7%",
        "item_replace_percentage": "4%",
        "past_thirty_days_user_stats": {
            "average_order_value": 29000,
            "order_return_rate": "35%",
            "order_replacement_rate": "32%",
            "unreturned_orders": 65  
        },
        "lifetime_user_stats": {
            "average_order_value": 28000,
            "order_return_rate": "38%",
            "order_replacement_rate": "35%",
            "unreturned_orders": 64  
        },
        "membership": false  
    },
    {
        "user": "liam_m",
        "uid": 1013,
        "item": "Air Conditioner",
        "cost": 45000,
        "order_date": "08/08/24",
        "status": "replace",
        "reason": "Not cooling",
        "item_return_percentage": "35%",
        "item_replace_percentage": "33%",
        "past_thirty_days_user_stats": {
            "average_order_value": 43000,
            "order_return_rate": "20%",
            "order_replacement_rate": "35%",
            "unreturned_orders": 80  
        },
        "lifetime_user_stats": {
            "average_order_value": 42000,
            "order_return_rate": "28%",
            "order_replacement_rate": "40%",
            "unreturned_orders": 75  
        },
        "membership": true  
    },
    {
        "user": "mike_n",
        "uid": 1014,
        "item": "Coffee Machine",
        "cost": 8000,
        "order_date": "07/08/24",
        "status": "return",
        "reason": "Water leakage",
        "item_return_percentage": "6%",
        "item_replace_percentage": "5%",
        "past_thirty_days_user_stats": {
            "average_order_value": 7800,
            "order_return_rate": "33%",
            "order_replacement_rate": "22%",
            "unreturned_orders": 67  
        },
        "lifetime_user_stats": {
            "average_order_value": 7600,
            "order_return_rate": "35%",
            "order_replacement_rate": "25%",
            "unreturned_orders": 65  
        },
        "membership": false  
    },
    {
        "user": "nina_o",
        "uid": 1015,
        "item": "Refrigerator",
        "cost": 35000,
        "order_date": "18/08/24",
        "status": "replace",
        "reason": "Cooling problem",
        "item_return_percentage": "40%",
        "item_replace_percentage": "30%",
        "past_thirty_days_user_stats": {
            "average_order_value": 34000,
            "order_return_rate": "22%",
            "order_replacement_rate": "35%",
            "unreturned_orders": 78  
        },
        "lifetime_user_stats": {
            "average_order_value": 33000,
            "order_return_rate": "26%",
            "order_replacement_rate": "30%",
            "unreturned_orders": 75  
        },
        "membership": true  
    }
]
    
  
  
  
  
    
	let cards = arr.map((x, i) => {
    //x.item_rtrp=arr[0].item_rtrp
  return <Card key={i} data={x} />});
  arr=arr.map
	return (
		<>
			<div
				onScroll={(e) => {
					
				}}
				className="fixed bg-light-1 h-full w-full  pb-16    justify-center flex flex-wrap ">
				<div className="sticky top-0 z-10 w-full backdrop-blur-md justify-between px-3 duration-300 lexend  flex items-center  text-light-2 h-16 bg-dark-1 bg-opacity- 80 ">
          <div className="text-3xl fade">sundarban </div>
          <div className="h-full py-2 flex items-center gap-2">
            <div className="h-full flex flex-col overflow-hidden items-end justify-center">
            <div className="">Good Morning, Peyush </div>
            <div className="text-dark-1 bg-dark-1 reveal pl-8 duration-1000 slide -mt-6" style={{ background:"linear-gradient(90deg, #2e344000 0%, #2e3440 10%)"

            }}>Good Morning, Peyush </div>
            <div className=" text-sm text-gray-400 fade2">Todays Goal: 0/100</div>
            </div>
                                             
            <div className="h-full border-dark-3 border aspect-square  fade rounded-full"
            style={{backgroundImage: `url(https://assets.entrepreneur.com/content/3x2/2000/1674100659-pbansal.jpg?format=pjeg&auto=webp&crop=1:1)`, backgroundOrigin:"cetner",backgroundSize:"cover"}}
            ></div>
          </div>
        </div>
				<div className=" overflow-y-scroll w-full items-center justify-center p-5 pl-5 pr-0 h-full flex flex-wrap gap-5">
        {cards}
        </div>
			</div>
		</>
	);
}

export default App;

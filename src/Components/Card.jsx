function Card({ data }) {
	if (data.cost>1000)
		{data.cost/=1000
			data.cost=data.cost.toFixed(0)+"k"
		}
	if(typeof(data.lifetime_user_stats.average_order_value)=="number")
	{
		data.lifetime_user_stats.average_order_value=data.lifetime_user_stats.average_order_value+data.past_thirty_days_user_stats.average_order_value
	}
	if(data.lifetime_user_stats.average_order_value>1000)
		{data.lifetime_user_stats.average_order_value/=1000
			data.lifetime_user_stats.average_order_value=data.lifetime_user_stats.average_order_value.toFixed(0)+"k"
		}
	if(data.past_thirty_days_user_stats.average_order_value>1000)
		{data.past_thirty_days_user_stats.average_order_value/=1000
			data.past_thirty_days_user_stats.average_order_value=data.past_thirty_days_user_stats.average_order_value.toFixed(0)+"k"
		}
	
		
	return (
		<>
			<div className=" w-96 text-dark-1 fade bord er border-light- lexend  flex-col rounded-md shadow-md flex justify-between items-center h-[30rem] hover:scale-105 hover:bg-light-3 hov er:w-[40rem] hov er:h-[30rem] delay-75 duration-300 bg-light-2 ">
				<div
					className="h-fit text-xl text-white  min-h-10 p-1 w-full self-start rounded-t-md "
					style={{
						backgroundColor:
							data.score>=50
								? "#a3be8c"
								: "#bf616a",
					}}>
					{data.id}
				</div>
				<div className="h-full  flex-col flex items-center p-2 pt-4 w-96  gap-5 justify-between">
					<div className="w-full h-full justify-center ">
						<div className=" text-xl lexend self-start mt-2 w-full whitespace-nowrap text-ellipsis overflow-hidden  ml-2 pr-3 ">
							{data.item}
						</div>
						<div className="text-dark-4 self-start ml-5 flex">
							<div className="w-full">Price</div>
							<div className="w-full">{data.cost}</div>
						</div>
						<div className="text-dark-4 self-start ml-5 flex">
							<div className="w-full">Order Date</div>
							<div className="w-full">{data.order_date}</div>
						</div>
						<div className="text-dark-3 self-start ml-5 flex capitalize">
							<div className="w-full">Request</div>
							<div className="w-full ">{data.status}</div>
						</div>
						<div className="text-dark-4 self-start ml-5 flex">
							<div className="w-full">Reason</div>
							<div className="w-full whitespace-nowrap text-ellipsis overflow-hidden">{data.reason}</div>
						</div>

						<div className="text-dark-4 self-start ml-5 flex">
							<div className="w-full">Item Ret. | Repl.%: </div>
							<div className="w-full flex gap-2" style={{color: data.item_return_percentage<40?"#a3be8c":"#bf616a"}}>{data.item_return_percentage +"% "}<div style={{color:"#434c5e"}}>|</div>{" "+data.item_replace_percentage}%</div>
						</div>
					</div>

					<div className="w-full h-full justify-center pr-2">
						<div className=" w-full px-5 text-dark-4   flex justify-between">
							<div className="w-full -ml-3 mr-2 min-w-fit text-xl">
								{" "}
								User Details
							</div>
							<div className="w-full text-xs leading-7 text-end">
								30 days
							</div>
							<div className="w-full text-xs leading-7 text-end">
								Lifetime
							</div>
						</div>
						<div className=" w-full px-5 text-dark-4  flex justify-between">
							<div className="w-full min-w-fit -mr-5">Avg. Order Value</div>
							<div className="w-full  text-end">{data.past_thirty_days_user_stats.average_order_value}</div>
							<div className="w-full  text-end">{data.lifetime_user_stats.average_order_value}</div>
						</div>
						<div className=" w-full  px-5 text-dark-4  flex justify-between">
							<div className="w-full">Ret. Rate</div>
							<div className="w-full  text-end" style={{color: data.past_thirty_days_user_stats.order_return_rate>25?"#bf616a":"#a3be8c"}}>{data.past_thirty_days_user_stats.order_return_rate}% </div>
							<div className="w-full  text-end" style={{color: data.lifetime_user_stats.order_return_rate>25?"#bf616a":"#a3be8c"}}>{data.lifetime_user_stats.order_return_rate}%</div>
						</div>
						<div className=" w-full  px-5 text-dark-4  flex justify-between">
							<div className="w-full">Repl. Rate</div>
							<div className="w-full  text-end" style={{color: data.past_thirty_days_user_stats.order_replacement_rate>25?"#bf616a":"#a3be8c"}}>{data.past_thirty_days_user_stats.order_replacement_rate}%</div>
							<div className="w-full  text-end" style={{color: data.lifetime_user_stats.order_replacement_rate>25?"#bf616a":"#a3be8c"}}>
                            {data.lifetime_user_stats.order_replacement_rate}%
							</div>
						</div>
						<div className=" w-full  px-5 text-dark-4  flex justify-between">
							<div className="w-full min-w-fit -mr-3">Fulfilled Orders</div>
							<div className="w-full  text-end">{data.past_thirty_days_user_stats.unreturned_orders}</div>
							<div className="w-full  text-end" >
                            {data.lifetime_user_stats.unreturned_orders + data.past_thirty_days_user_stats.unreturned_orders}
							</div>
						</div>
						
					</div>
					<div className="w-full justify-between px-4 pb-24 items-start bg- black flex h-16">
						
						<div>
						<div className=" gap-1 flex" >Score:
							<div style={{color: data.score<50?"#bf616a":""}}>
							{data.score.toFixed(0)}</div> </div>
						<div className="flex gap-1">AI Decision: <div style={{color: data.score<50?"#bf616a":"#a3be8c"}}>{data.score<50?"Reject":"Accept"} </div></div>
						<div>Remarks: {data.remarks?data.remarks:"None"}</div>
						</div>
						
						
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;

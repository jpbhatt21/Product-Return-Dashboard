function Card({ data }) {
	return (
		<>
			<div className=" w-96 text-dark-1 bord er border-light- lexend  flex-col rounded-md shadow-md flex justify-between items-center h-96 hover:scale-105 hover:bg-light-3 delay-75 duration-300 bg-light-2 ">
				<div
					className="h-fit text-xl text-white  p-1 w-full self-start rounded-t-md "
					style={{
						backgroundColor:
							data.recommendation == "approved"
								? "#a3be8c"
								: "#bf616a",
					}}>
					{data.uid}
				</div>
				<div className="h-full w-full flex-col flex items-center p-2 pt-4  gap-5 justify-between">
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
							<div className="w-full">Item Rt|Rp%: </div>
							<div className="w-full">{data.item_rtrp.join("% | ")}%</div>
						</div>
					</div>

					<div className="w-full h-full justify-center">
						<div className=" w-full px-5 text-dark-4   flex justify-between">
							<div className="w-full -ml-3 mr-2 min-w-fit text-xl">
								{" "}
								User Details
							</div>
							<div className="w-full text-xs leading-7 text-center">
								30 days
							</div>
							<div className="w-full text-xs leading-7 text-center">
								Lifetime
							</div>
						</div>
						<div className=" w-full px-5 text-dark-4  flex justify-between">
							<div className="w-full">AOV</div>
							<div className="w-full  text-center">{data.user.aov.td}</div>
							<div className="w-full  text-center">{data.user.aov.lt}</div>
						</div>
						<div className=" w-full  px-5 text-dark-4  flex justify-between">
							<div className="w-full">Rt|Rp% (OC)</div>
							<div className="w-full  text-center">{data.user.rtrpc.td.join("% | ")}% </div>
							<div className="w-full  text-center">{data.user.rtrpc.lt.join("% | ")}%</div>
						</div>
						<div className=" w-full  px-5 text-dark-4  flex justify-between">
							<div className="w-full">Rt|Rp% (OV)</div>
							<div className="w-full  text-center">{data.user.rtrpv.td.join("% | ")}%</div>
							<div className="w-full  text-center">
                            {data.user.rtrpv.lt.join("% | ")}%
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;

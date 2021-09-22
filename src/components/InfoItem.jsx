import React from "react";

export function InfoItem({ description, value, icon }) {
  return (
		<div className='flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4'>
			<span className='font-bold'>
				<i className={"text-gray-700 " + icon}></i>
				<span className='pl-2'>{description}</span>
			</span>
			<span className='pl-2 text-gray-800 '>{value}</span>
		</div>
  );
}
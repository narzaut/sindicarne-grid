export const arrangeDate = (date) => {
	let rearrangedDate;
	rearrangedDate = date.split('-').reverse()
	rearrangedDate[0] = rearrangedDate[0].substring(0, 2)
	return rearrangedDate.join(' / ')

}
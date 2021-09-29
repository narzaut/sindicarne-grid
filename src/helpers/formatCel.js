export const formatCel = (cel) => {
	
	return cel.toString().replace(/\B(?=(\d{6})+(?!\d))/g, "-");

}
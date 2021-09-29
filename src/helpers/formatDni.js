export const formatDni = (dni) => {
	let newDni = ''
	newDni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return newDni
}
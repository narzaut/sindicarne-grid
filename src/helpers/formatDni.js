export const formatDni = (dni) => {
	if (!dni) return null
	let newDni = ''
	newDni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return newDni
}
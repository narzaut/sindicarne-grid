export const capitalize = (name) => { 
	if (!name) return null
	const newName = name.toLowerCase()
	return newName.replace(/(?:^|\s)\S/g, s => s.toUpperCase());
}
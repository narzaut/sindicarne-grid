export const capitalize = (name) => { 
	const newName = name.toLowerCase()
	return newName.replace(/(?:^|\s)\S/g, s => s.toUpperCase());
}
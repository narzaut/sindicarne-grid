export const censorPassword = (password) => {
	return password.replaceAll(/./ig, '*')
}
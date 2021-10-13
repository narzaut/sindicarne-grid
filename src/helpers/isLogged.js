export const isLogged = () => {
	return new Promise ((resolve, reject) => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (!user) return resolve(false)
		return resolve(true)
	})
}

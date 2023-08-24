export async function load({ url, route }) {
	url.pathname; // cause load function triggered on every page
	route.id; // same
	console.log('layout load triggered');
}

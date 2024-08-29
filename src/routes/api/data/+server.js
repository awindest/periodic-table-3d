import { json } from '@sveltejs/kit'
import data from './PeriodicTableJSON.json' //these data are from https://github.com/Bowserinator/Periodic-Table-JSON

// yeah, the data is local but keeping this around in case we want to change the API
export async function GET() {
	return json(data)
}

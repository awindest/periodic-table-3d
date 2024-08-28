import { json } from '@sveltejs/kit'
import data from './PeriodicTableJSON.json' //these data are from https://github.com/Bowserinator/Periodic-Table-JSON

export async function GET() {
	return json(data)
}

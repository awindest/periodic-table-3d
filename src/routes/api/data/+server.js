import { json } from '@sveltejs/kit'
import data from './PeriodicTableJSON.json'

export async function GET() {
	return json(data)
}

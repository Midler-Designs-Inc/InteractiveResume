import { readFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const dataPath = join(__dirname, '../../public/skills_survey_data.json');

export default defineEventHandler(async (event) => {
    try {
        const data = readFileSync(dataPath, 'utf-8')

        return JSON.parse(data)
    } catch (err) {
        // Return empty object if file doesn't exist or is invalid
        return {}
    }
});

import { writeFileSync } from 'fs';
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const dataPath = join(__dirname, '../../public/skills_survey_data.json')

export default defineEventHandler(async (event) => {
    try {
        // extract the body from the request and write it to the file
        const body = await readBody(event);
        await writeFileSync(dataPath, body);

        return { success: true }
    } catch (err) {
        console.error('Error writing skills survey data:', err)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save skills survey data'
        });
    }
})

export default defineEventHandler(async (event) => {
    try {

        return { success: true }
    } catch (err) {
        console.error('', err);
        throw createError({
            statusCode: 500,
            statusMessage: ''
        });
    }
})

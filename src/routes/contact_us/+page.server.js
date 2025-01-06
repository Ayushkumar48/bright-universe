export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('subject');
		const number = data.get('number');
		const message = data.get('message');

		return { success: true };
	}
};

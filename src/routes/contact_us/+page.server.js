export const actions = {
	default: async ({ request, fetch }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email');
			const name = formData.get('name');
			const number = formData.get('number');
			const subject = formData.get('subject');
			const message = formData.get('message');
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, subject, number, message })
			});
			if (!response.ok) {
				throw new Error(`Failed to send email: ${response.statusText}`);
			}

			const result = await response.json();
			return { success: result.success };
		} catch (error) {
			console.error('Error in form action:', error);
			return { success: false, error: error.message };
		}
	}
};

import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email');
			const name = formData.get('name');
			const number = formData.get('number');
			const subject = formData.get('subject');
			const message = formData.get('message');
			const transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: EMAIL_USER,
					pass: EMAIL_PASS
				}
			});

			await transporter.sendMail({
				from: email,
				to: EMAIL_USER,
				subject,
				text: `You have received a new message from ${name} \nEmail:- ${email} \nPhone:- ${number} \n\nMessage:-\n${message}`
			});

			return { success: true };
		} catch (error) {
			console.error('Error in form action:', error);
			return { success: false };
		}
	}
};

import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('subject');
		const number = data.get('number');
		const message = data.get('message');
		try {
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
		} catch (err) {
			console.log('Error while submitting form: ', err);
		}
	}
};

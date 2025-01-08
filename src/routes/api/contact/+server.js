import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '$env/static/private';

export async function POST({ request }) {
	try {
		const { name, email, subject, number, message } = await request.json();
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

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.log('Error while submitting form: ', err);

		return new Response(JSON.stringify({ success: false }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}

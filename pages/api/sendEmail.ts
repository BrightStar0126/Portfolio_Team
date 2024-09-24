// // pages/api/sendEmail.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// // Components
// import { EmailTemplate } from '../../components/email/email-template';

// // Initialiser Resend avec la clé API
// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   // Obtenir les données du formulaire depuis la requête
//   const { senderName, phone, senderEmail, subject, message } =
//     req.body;

//   // Vérifier la méthode POST
//   const { method } = req;

//   if (method === 'POST') {
//   } else {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   try {
//     // Envoyer l'email
//     const data = await resend.emails.send({
//       from: 'Hello <noreply@blockchain-cie.com>',
//       to: [`${process.env.TO_EMAIL}`],
//       subject: `🎉New submission from ${senderName} to Blockchain & Star`,
//       react: EmailTemplate({
//         senderName,
//         senderEmail,
//         phone,
//         subject,
//         message,
//       }),
//     });

//     console.log('Email posted : ', data);
//     res
//       .status(200)
//       .json({ success: true, message: `Email posted : ${data}` });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

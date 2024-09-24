// Librairies
import * as React from 'react';

// Type
// Définir les types des props
type EmailTemplateProps = {
  senderName: string;
  senderEmail: string;
  phone: string;
  subject: string;
  message: string;
};

// MAIN FUNCTION
export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  senderName,
  senderEmail,
  phone,
  subject,
  message,
}) => {
  const previewText = `Weekly Updates 🚀${senderName} sent you a message.`;
  return (
    <>
      <header>{previewText}</header>
      <div className='bg-white my-auto mx-auto font-sans'>
        <div className='my-20 mx-auto p-20 max-w-4xl'>
          <h1 className='text-black text-2xl font-normal text-left'>
            Subject : {subject}
          </h1>

          <h2 className='text-black text-base leading-6'>
            <strong>Message : {message}</strong>
          </h2>

          <p className='text-gray-600 text-sm'>
            Email : {senderEmail}
          </p>
          <p className='text-gray-600 text-sm'>
            Phone number : {phone}
          </p>

          <hr className='my-16 mx-0 w-full' />

          <p className='text-gray-600 text-sm'>
            Regards,
            <br />
            Blockchain & Star.✨
          </p>
        </div>
      </div>
    </>
  );
};

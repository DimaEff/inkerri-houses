import emailjs from "emailjs-com";


export const callOrderTemplate = 'template_upgw49v';
export const errorTemplate = 'template_33lz19w';

const sendEmail = (template) => async (data, e, str) => {
    e?.preventDefault();

    const result = await emailjs.sendForm('service_68ik7oo', template, str || e.target, 'user_vojqm7N86tQAGQq6vat64');
    return result;
}

export default sendEmail;
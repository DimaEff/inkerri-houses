import emailjs from "emailjs-com";


const sendEmail = (template) => async (data, e) => {
    e.preventDefault();

    const result = await emailjs.sendForm('service_68ik7oo', template, e.target, 'user_vojqm7N86tQAGQq6vat64');
    return result;
}

export default sendEmail;
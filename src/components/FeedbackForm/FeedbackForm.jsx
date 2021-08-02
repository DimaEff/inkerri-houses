import React from 'react';

import Form from "../common/Form/Form";
import sendEmail from "./index";


const FeedbackForm = ({children, template, schema, buttonText, ...props}) => {
    const antiSpam = <input type="hidden" name="contact_number" />;

    return (
        <div>
            <Form onSubmit={sendEmail(template)} schema={schema} buttonText={buttonText} antiSpam={antiSpam} {...props}>
                {children}
            </Form>
        </div>
    );
};

export default FeedbackForm;

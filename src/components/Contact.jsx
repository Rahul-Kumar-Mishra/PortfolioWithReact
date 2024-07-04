import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzhGcnWLawjDsW2lcNFpRjORn5jscJrHe5hEUaM5GDhMPTFVtTYN29VVfN0Shkpwy4m/exec';
    const form = e.target;
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("Message Sent Successfully");
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <section id="contact" className="bg-light">
      <Container data-aos="fade-up">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form onSubmit={handleSubmit} name="submit-to-google-sheet">
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" id="name" name="name" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" id="email" name="email" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" id="msg" name="msg" required />
          </Form.Group>
          {/* <Button variant="d-grid gap-2" type="submit" className="d-grid gap-2 ">Submit</Button> */}
          <div className="d-grid gap-2 mt-10">
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

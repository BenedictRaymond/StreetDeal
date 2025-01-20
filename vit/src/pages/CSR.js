import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailConfig, generateEmailTemplate } from '../utils/emailConfig';

const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--accent);
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-main);
  max-width: 600px;
  margin: 0 auto;
`;

const GetInvolvedButton = styled(motion.button)`
  background: var(--accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 2rem 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin: 4rem auto;
  padding: 0 2rem;
  max-width: 1200px;
`;

const StatBox = styled(motion.div)`
  background: var(--header-bg);
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: var(--text-main);
`;

const MissionSection = styled.div`
  background: var(--header-bg);
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 4rem;
  border-radius: 12px;
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 2rem;
`;

const MissionText = styled.p`
  font-size: 1.1rem;
  color: var(--text-main);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%) !important;
  background: var(--header-bg);
  padding: 3rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  z-index: 1000;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  max-height: 85vh;
  overflow-y: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--accent);
    text-align: center;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--body-bg);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--accent);
  background: var(--body-bg);
  color: var(--text-main);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--accent);
  background: var(--body-bg);
  color: var(--text-main);
  min-height: 100px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--accent);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-main);
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: var(--accent);
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: #1a2c2c;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 30px rgba(0, 255, 213, 0.3);
  border: 1px solid var(--accent);
  z-index: 1000;
  
  h3 {
    color: var(--accent);
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(0, 255, 213, 0.3);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }
`;

function CSR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const sendEmail = async (formData) => {
    const templateParams = {
      to_email: formData.email,
      from_name: "StreetDeal",
      to_name: formData.name,
      reply_to: emailConfig.senderEmail,
      subject: "Thank You for Joining Our CSR Initiative!",
      message: `
Dear ${formData.name},

Thank you for expressing your interest in StreetDeal's CSR initiatives. We are thrilled to have someone as passionate as you joining us in making a difference.

Here are the details you provided:

Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Area of Interest: ${formData.interest}
Contribution Method: ${formData.message}

We appreciate your willingness to contribute to our cause and bring positive change. Our team will review your submission and get in touch with you shortly with more details on how you can get involved.

At StreetDeal, we firmly believe that "deals on streets are our empire" and empowering communities is at the heart of our mission. Together, we can create lasting impact.

If you have any questions or need further assistance, feel free to reach out to us at santhoshsharanb@gmail.com.

Looking forward to collaborating with you!

Warm regards,
Santhosh Sharan B
Community Manager
StreetDeal
"Deals on streets are our empire"
Contact: santhoshsharanb@gmail.com`
    };

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <Header>
        <Title>CSR Initiatives</Title>
        <Subtitle>
          Building sustainable communities through meaningful initiatives
        </Subtitle>
        <GetInvolvedButton
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved
        </GetInvolvedButton>
      </Header>

      <StatsContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatBox>
          <StatNumber>500+</StatNumber>
          <StatLabel>Vendors Supported</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>₹10L+</StatNumber>
          <StatLabel>Financial Aid Distributed</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>20+</StatNumber>
          <StatLabel>Active Programs</StatLabel>
        </StatBox>
      </StatsContainer>

      <MissionSection>
        <MissionTitle>Join Our Mission</MissionTitle>
        <MissionText>
          Together, we can create a more sustainable and inclusive community. 
          Our CSR initiatives focus on empowering street vendors through various 
          support programs and community development activities.
        </MissionText>
        <GetInvolvedButton
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved
        </GetInvolvedButton>
      </MissionSection>

      {isModalOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => !isSubmitted && setIsModalOpen(false)}
          />
          {isSubmitted ? (
            <ThankYouMessage
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <h3>Thank You for Your Interest!</h3>
              <p>We appreciate your willingness to contribute to our CSR initiatives. Our team will contact you within 24-48 hours to discuss how you can get involved and make a difference in our community.</p>
            </ThankYouMessage>
          ) : (
            <Modal
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              style={{ 
                position: 'fixed',
                top: '50%',
                left: '45%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
              <h2>Join Our CSR Initiatives</h2>
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Area of Interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                />
                <TextArea
                  placeholder="How would you like to contribute?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                </SubmitButton>
              </Form>
            </Modal>
          )}
        </>
      )}
    </PageContainer>
  );
}

export default CSR; 
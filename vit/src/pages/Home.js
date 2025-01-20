import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 90vh;
  background: linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)),
    url('/images/street-market.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-bright);
  line-height: 1.2;
  
  span {
    color: var(--accent);
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: var(--text-main);
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: var(--text-bright);
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <HeroContent>
        <Title>Supporting Local <span>Street Vendors</span></Title>
        <Subtitle>
          Connecting communities with authentic local experiences and flavors
        </Subtitle>
        <Button onClick={() => navigate('/posters')}>
          Discover Vendors
        </Button>
      </HeroContent>
    </HeroSection>
  );
}

export default Home; 
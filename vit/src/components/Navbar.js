import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle at center, rgba(0, 255, 213, 0.1) 0%, transparent 70%);
    filter: blur(8px);
    z-index: 0;
    pointer-events: none;
  }
`;

const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1.5px;
  margin-bottom: 0.2rem;
  position: relative;
  z-index: 1;
  
  background: linear-gradient(
    45deg,
    #00ffd5 0%,
    #00c3ff 50%,
    #00ffd5 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
  text-shadow: 
    0 0 10px rgba(0, 255, 213, 0.3),
    0 0 20px rgba(0, 255, 213, 0.2),
    0 0 30px rgba(0, 255, 213, 0.1);

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  &:hover {
    animation: shine 1.5s linear infinite;
    text-shadow: 
      0 0 15px rgba(0, 255, 213, 0.4),
      0 0 25px rgba(0, 255, 213, 0.3),
      0 0 35px rgba(0, 255, 213, 0.2);
  }
`;

const Tagline = styled.div`
  font-size: 1rem;
  color: #a8a8a8;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  letter-spacing: 0.8px;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(0, 255, 213, 0.2);
  transition: color 0.3s ease;
  
  ${LogoContainer}:hover & {
    color: #cccccc;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  
  a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--accent);
      
      &::after {
        width: 100%;
      }
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <LogoContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <Logo>StreetDeal</Logo>
        <Tagline>Your Economical Partner</Tagline>
      </LogoContainer>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/vendors">Vendors</a>
        <a href="/csr">CSR Initiatives</a>
        <a href="/articles">Articles</a>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 
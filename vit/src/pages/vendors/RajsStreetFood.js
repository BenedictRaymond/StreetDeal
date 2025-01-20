import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  PageContainer,
  Content,
  BackButton,
  VendorTitle,
  Gallery,
  MainImage,
  Thumbnails,
  Thumbnail,
  InfoSection,
  InfoTitle,
  InfoText,
  SpecialtyTag,
  MenuGrid,
  MenuItem,
  Price,
  ContactInfo
} from '../../styles/VendorStyles';

const vendorImages = [
  "/images/maincards/rajs/1.jpg",
  "/images/maincards/rajs/2.jpg",
  "/images/maincards/rajs/3.jpg",
  "/images/maincards/rajs/4.jpg",
  "/images/maincards/rajs/5.jpg",
  "/images/maincards/rajs/6.jpg",
  "/images/maincards/rajs/7.jpg",
  "/images/maincards/rajs/8.jpg",
  "/images/maincards/rajs/9.jpg",
  "/images/maincards/rajs/10.jpg"
];

const menuItems = [
  { name: "Pani Puri", price: "₹30" },
  { name: "Bhel Puri", price: "₹40" },
  { name: "Samosa", price: "₹15" },
  { name: "Dahi Puri", price: "₹50" },
  { name: "Sev Puri", price: "₹40" },
  { name: "Masala Chai", price: "₹10" }
];

function RajsStreetFood() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageContainer>
      <Content>
        <BackButton onClick={() => navigate('/vendors')}>
          ← Back to Vendors
        </BackButton>

        <VendorTitle>Raj's Street Food Corner</VendorTitle>

        <Gallery>
          <MainImage 
            src={vendorImages[selectedImage]} 
            alt="Raj's Street Food"
          />
          <Thumbnails>
            {vendorImages.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                selected={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Thumbnails>
        </Gallery>

        <InfoSection>
          <InfoTitle>About Us</InfoTitle>
          <InfoText>
            With over 15 years of experience in serving authentic street food, 
            Raj's Street Food Corner has become a landmark in Gandhi Market. 
            Our commitment to quality and hygiene has earned us a loyal customer base 
            and made us one of the most trusted street food vendors in the area.
          </InfoText>
          <div style={{ marginTop: '1rem' }}>
            <SpecialtyTag>Famous for Pani Puri</SpecialtyTag>
            <SpecialtyTag>Authentic Chaat</SpecialtyTag>
            <SpecialtyTag>Hygienic Preparation</SpecialtyTag>
          </div>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Our Menu</InfoTitle>
          <MenuGrid>
            {menuItems.map((item, index) => (
              <MenuItem key={index}>
                <InfoText>{item.name}</InfoText>
                <Price>{item.price}</Price>
              </MenuItem>
            ))}
          </MenuGrid>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Visit Us</InfoTitle>
          <ContactInfo>
            <InfoText>📍 Gandhi Market, Street 4, Near Central Park</InfoText>
            <InfoText>⏰ Open: 11:00 AM - 9:00 PM (Tuesday - Sunday)</InfoText>
            <InfoText>📞 Contact: +91 98765 43210</InfoText>
          </ContactInfo>
        </InfoSection>
      </Content>
    </PageContainer>
  );
}

export default RajsStreetFood; 
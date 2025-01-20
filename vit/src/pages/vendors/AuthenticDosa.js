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
  "/images/maincards/dosa/1.jpg",
  "/images/maincards/dosa/2.jpg",
  "/images/maincards/dosa/3.jpg",
  "/images/maincards/dosa/4.jpg",
  "/images/maincards/dosa/5.jpg",
  "/images/maincards/dosa/6.jpg",
  "/images/maincards/dosa/7.jpg",
  "/images/maincards/dosa/8.jpg",
  "/images/maincards/dosa/9.jpg",
  "/images/maincards/dosa/10.jpg"
];

const menuItems = [
  { name: "Masala Dosa", price: "₹60" },
  { name: "Plain Dosa", price: "₹40" },
  { name: "Idli (2 pcs)", price: "₹30" },
  { name: "Vada (2 pcs)", price: "₹30" },
  { name: "Uttapam", price: "₹50" },
  { name: "Filter Coffee", price: "₹20" }
];

function AuthenticDosa() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageContainer>
      <Content>
        <BackButton onClick={() => navigate('/vendors')}>
          ← Back to Vendors
        </BackButton>

        <VendorTitle>Authentic Dosa Point</VendorTitle>

        <Gallery>
          <MainImage 
            src={vendorImages[selectedImage]} 
            alt="Authentic Dosa Point"
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
            For two decades, we've been serving authentic South Indian cuisine to our valued customers. 
            Our secret lies in the traditional preparation methods and high-quality ingredients imported 
            directly from South India. Every dosa is made fresh to order, ensuring the perfect crispy texture 
            and authentic taste that our customers love.
          </InfoText>
          <div style={{ marginTop: '1rem' }}>
            <SpecialtyTag>Crispy Dosas</SpecialtyTag>
            <SpecialtyTag>Soft Idlis</SpecialtyTag>
            <SpecialtyTag>Authentic Taste</SpecialtyTag>
            <SpecialtyTag>Fresh Chutneys</SpecialtyTag>
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
          <InfoTitle>Special Features</InfoTitle>
          <InfoText>
            • Traditional stone-ground batter
            • Homemade chutneys prepared daily
            • Special weekend menu
            • Catering services available
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Visit Us</InfoTitle>
          <ContactInfo>
            <InfoText>📍 Lake View Road, Near Park</InfoText>
            <InfoText>⏰ Open: 7:00 AM - 10:00 PM (All Days)</InfoText>
            <InfoText>📞 Contact: +91 98765 43212</InfoText>
            <InfoText>🌟 Bulk orders for events welcome</InfoText>
          </ContactInfo>
        </InfoSection>
      </Content>
    </PageContainer>
  );
}

export default AuthenticDosa; 
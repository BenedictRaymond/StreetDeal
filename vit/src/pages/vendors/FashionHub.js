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
  "/images/maincards/fashion/1.jpg",
  "/images/maincards/fashion/2.jpg",
  "/images/maincards/fashion/3.jpg",
  "/images/maincards/fashion/4.jpg",
  "/images/maincards/fashion/5.jpg",
  "/images/maincards/fashion/6.jpg",
  "/images/maincards/fashion/7.jpg",
  "/images/maincards/fashion/8.jpg",
  "/images/maincards/fashion/9.jpg",
  "/images/maincards/fashion/10.jpg"
];

const menuItems = [
  { name: "Trendy Tops", price: "From ₹299" },
  { name: "Designer Bags", price: "From ₹399" },
  { name: "Fashion Jewelry", price: "From ₹99" },
  { name: "Stylish Scarves", price: "From ₹149" },
  { name: "Summer Collection", price: "From ₹499" },
  { name: "Accessories", price: "From ₹79" }
];

function FashionHub() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageContainer>
      <Content>
        <BackButton onClick={() => navigate('/vendors')}>
          ← Back to Vendors
        </BackButton>

        <VendorTitle>Street Fashion Hub</VendorTitle>

        <Gallery>
          <MainImage 
            src={vendorImages[selectedImage]} 
            alt="Street Fashion Hub"
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
            Street Fashion Hub brings you the latest trends at affordable prices. 
            With 5+ years of experience, we curate the best collection of clothing 
            and accessories for fashion-conscious customers. Our collection is updated 
            weekly to keep up with the latest fashion trends.
          </InfoText>
          <div style={{ marginTop: '1rem' }}>
            <SpecialtyTag>Trendy Collection</SpecialtyTag>
            <SpecialtyTag>Affordable Fashion</SpecialtyTag>
            <SpecialtyTag>Quality Assured</SpecialtyTag>
            <SpecialtyTag>Weekly Updates</SpecialtyTag>
          </div>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Featured Items</InfoTitle>
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
          <InfoTitle>Our Services</InfoTitle>
          <InfoText>
            • Personal styling advice
            • Size customization
            • Exchange policy available
            • Bulk orders for events
            • Student discounts
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Visit Us</InfoTitle>
          <ContactInfo>
            <InfoText>📍 Fashion Street, Lane 2, City Center</InfoText>
            <InfoText>⏰ Open: 11:00 AM - 9:00 PM (All Days)</InfoText>
            <InfoText>📞 Contact: +91 98765 43214</InfoText>
            <InfoText>🌟 Follow us on Instagram @StreetFashionHub</InfoText>
          </ContactInfo>
        </InfoSection>
      </Content>
    </PageContainer>
  );
}

export default FashionHub; 
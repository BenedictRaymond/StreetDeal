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
  "/images/maincards/craft/1.jpg",
  "/images/maincards/craft/2.jpg",
  "/images/maincards/craft/3.jpg",
  "/images/maincards/craft/4.jpg",
  "/images/maincards/craft/5.jpg",
  "/images/maincards/craft/6.jpg",
  "/images/maincards/craft/7.jpg",
  "/images/maincards/craft/8.jpg",
  "/images/maincards/craft/9.jpg",
  "/images/maincards/craft/10.jpg"
];

const menuItems = [
  { name: "Handmade Jewelry", price: "From ₹299" },
  { name: "Ceramic Pottery", price: "From ₹499" },
  { name: "Wall Art", price: "From ₹999" },
  { name: "Traditional Crafts", price: "From ₹399" },
  { name: "Custom Orders", price: "Price on Request" },
  { name: "Workshop Sessions", price: "₹1500/person" }
];

function CraftCorner() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <PageContainer>
      <Content>
        <BackButton onClick={() => navigate('/vendors')}>
          ← Back to Vendors
        </BackButton>

        <VendorTitle>Handcraft Corner</VendorTitle>

        <Gallery>
          <MainImage 
            src={vendorImages[selectedImage]} 
            alt="Handcraft Corner"
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
            Handcraft Corner celebrates traditional artisanship with modern designs. 
            Our artisans create unique pieces that blend cultural heritage with 
            contemporary aesthetics. Each piece tells a story of craftsmanship and dedication. 
            We also conduct workshops to keep traditional craft techniques alive.
          </InfoText>
          <div style={{ marginTop: '1rem' }}>
            <SpecialtyTag>Handmade Items</SpecialtyTag>
            <SpecialtyTag>Traditional Crafts</SpecialtyTag>
            <SpecialtyTag>Custom Orders</SpecialtyTag>
            <SpecialtyTag>Craft Workshops</SpecialtyTag>
          </div>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Featured Collections</InfoTitle>
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
          <InfoTitle>Workshop Schedule</InfoTitle>
          <InfoText>
            Join our craft workshops and learn traditional techniques:
            • Basic Pottery (Saturdays)
            • Jewelry Making (Sundays)
            • Traditional Art (Weekday Evenings)
            • Special Holiday Workshops
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Custom Orders</InfoTitle>
          <InfoText>
            We welcome custom orders for:
            • Wedding Favors
            • Corporate Gifts
            • Special Occasions
            • Personalized Items
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Visit Us</InfoTitle>
          <ContactInfo>
            <InfoText>📍 Artisan Market, Cultural Zone</InfoText>
            <InfoText>⏰ Open: 10:00 AM - 8:00 PM (Closed Mondays)</InfoText>
            <InfoText>📞 Contact: +91 98765 43215</InfoText>
            <InfoText>🌟 Workshop bookings: craft.corner@email.com</InfoText>
          </ContactInfo>
        </InfoSection>
      </Content>
    </PageContainer>
  );
}

export default CraftCorner; 
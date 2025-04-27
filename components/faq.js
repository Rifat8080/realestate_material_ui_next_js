import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box,
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/* eslint-disable react/no-unescaped-entities */

const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: 'panel1',
      question: "What services do you offer to property sellers?",
      answer: "We provide comprehensive services for sellers including property valuation, professional photography, virtual tours, targeted marketing campaigns, assistance with negotiations, and guidance throughout the closing process. Our aim is to maximize your property's value and ensure a smooth selling experience."
    },
    {
      id: 'panel2',
      question: "How do I qualify for a mortgage loan?",
      answer: "Qualifying for a mortgage typically involves meeting credit score requirements (usually 620 or higher), maintaining a debt-to-income ratio below 43%, providing proof of steady income, having sufficient funds for a down payment (typically 3-20% depending on loan type), and demonstrating a stable employment history. We can connect you with trusted lenders who will guide you through the specific requirements based on your financial situation."
    },
    {
      id: 'panel3',
      question: "What is your commission structure?",
      answer: "Our commission structure is competitive and transparent. Typically, the total commission ranges from 5-6% of the sale price, which is split between the listing agent and buyer's agent. However, we offer flexible packages that can be customized based on the level of service required and the property value. We're happy to discuss these options during our initial consultation."
    },
    {
      id: 'panel4',
      question: "How long does it typically take to close on a property?",
      answer: "The closing process typically takes 30-45 days from the acceptance of an offer. This timeline can vary based on factors such as the type of financing, property inspection results, appraisal process, and title search complexity. Cash purchases may close more quickly, sometimes in as little as two weeks. We'll provide you with a more accurate timeline based on your specific transaction."
    },
    {
      id: 'panel5',
      question: "What sets your real estate agency apart from competitors?",
      answer: "Our agency distinguishes itself through our in-depth local market knowledge, personalized approach to each client's unique needs, innovative marketing strategies, extensive professional network, and commitment to transparent communication throughout the entire process. Additionally, our agents undergo continuous education to stay ahead of market trends and technological advancements in the industry."
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          fontWeight="bold"
          gutterBottom
        >
          Frequently Asked <Box component="span" color="#3595ff">Questions</Box>
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ maxWidth: '700px', mx: 'auto' }}
        >
          We've compiled answers to the questions we receive most frequently about our real estate services and processes.
        </Typography>
      </Box>

      {/* Accordions */}
      <Box sx={{ 
        maxWidth: '900px', 
        mx: 'auto',
        '& .MuiAccordion-root': {
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          mb: 2,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider'
        }
      }}>
        {faqItems.map((item) => (
          <Accordion 
            key={item.id}
            expanded={expanded === item.id} 
            onChange={handleChange(item.id)}
            sx={{
              '&.Mui-expanded': {
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#3595ff' }} />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              sx={{ 
                px: 3,
                '&.Mui-expanded': {
                  minHeight: 56,
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }
              }}
            >
              <Typography 
                fontWeight="medium" 
                sx={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: expanded === item.id ? '#3595ff' : 'inherit'
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, py: 2.5 }}>
              <Typography variant="body2" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
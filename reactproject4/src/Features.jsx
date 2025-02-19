import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <FeaturesContainer>
            {/* Hero Section */}
            <HeroSection>
                <h1>Features That Empower Your Financial Life</h1>
                <p>
                    FINLIFE Planner is designed to help you manage your finances effortlessly. Explore the features that make budgeting simple and effective.
                </p>
                <CTAButton as={Link} to="/signup">Get Started</CTAButton>
            </HeroSection>

            {/* Key Features Section */}
            <Section>
                <h2>Key Features</h2>
                <FeatureGrid>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Daily Budget Planning</h3>
                        <p>
                            Plan your day with a daily budget that aligns with your tasks and financial goals.
                        </p>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Expense Tracking</h3>
                        <p>
                            Track your expenses in real-time and see where your money is going.
                        </p>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Bill Reminders</h3>
                        <p>
                            Never miss a payment with timely reminders for your bills and financial dues.
                        </p>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Goal Setting</h3>
                        <p>
                            Set financial goals and track your progress toward achieving them.
                        </p>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Task Management</h3>
                        <p>
                            Organize your tasks and align them with your budget for better productivity.
                        </p>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon>??</FeatureIcon>
                        <h3>Mobile-Friendly</h3>
                        <p>
                            Access your budget and tasks on the go with our mobile-friendly design.
                        </p>
                    </FeatureCard>
                </FeatureGrid>
            </Section>

            {/* How It Helps Section */}
            <Section>
                <h2>How FINLIFE Planner Helps You</h2>
                <BenefitsList>
                    <BenefitItem>
                        <h3>Stay Organized</h3>
                        <p>
                            Keep track of your finances and tasks in one place, so you never miss a beat.
                        </p>
                    </BenefitItem>
                    <BenefitItem>
                        <h3>Achieve Financial Goals</h3>
                        <p>
                            Set realistic goals and watch your progress as you work toward financial freedom.
                        </p>
                    </BenefitItem>
                    <BenefitItem>
                        <h3>Reduce Stress</h3>
                        <p>
                            With timely reminders and easy tracking, managing your finances becomes stress-free.
                        </p>
                    </BenefitItem>
                </BenefitsList>
            </Section>

            {/* Call-to-Action Section */}
            <CTASection>
                <h2>Ready to Take Control of Your Finances?</h2>
                <p>
                    Sign up today and start your journey toward financial freedom with FINLIFE Planner.
                </p>
                <CTAButton as={Link} to="/signup">Sign Up Now</CTAButton>
            </CTASection>
        </FeaturesContainer>
    );
};

export default Features;

// Styled Components
const FeaturesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #0fd850, #f9f047);
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    color: #333;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    margin: 20px 0 10px;
    color: #333;
  }
  p {
    color: #555;
    line-height: 1.6;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const BenefitItem = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  p {
    color: #555;
    line-height: 1.6;
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: #282c34;
  color: white;
  border-radius: 10px;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const CTAButton = styled(Link)`
  background: #0fd850;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.3s ease;
  &:hover {
    background: #0fa850;
  }
`;
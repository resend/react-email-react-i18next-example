import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import './i18n';
import { useTranslation } from 'react-i18next';

interface PricingProps {
  locale: 'pt' | 'en';
}

export function Pricing({ locale }: PricingProps) {
  const { t } = useTranslation('pricingEmail', {
    lng: locale,
  });

  return (
    <Tailwind>
      <Html>
        <Head />
        <Body>
          <Preview>
            {t(
              'Exclusive Offer Just For You: Unlock Premium Features at $12/month',
            )}
          </Preview>
          <Container className="bg-white rounded-[12px] mx-auto max-w-[500px] p-[24px]">
            <Section className="bg-white border border-solid border-gray-300 rounded-[12px] text-gray-600 p-[28px] w-full text-left mb-0">
              <Text className="text-indigo-600 text-[12px] leading-[20px] font-semibold tracking-wide mb-[16px] mt-[16px] uppercase">
                {t('Exclusive Offer')}
              </Text>
              <Text className="text-[30px] font-bold leading-[36px] mb-[12px] mt-0">
                <span className="text-[rgb(16,24,40)]">$12</span>{' '}
                <span className="text-[16px] font-medium leading-[20px]">
                  {t('/ month')}
                </span>
              </Text>
              <Text className="text-gray-700 text-[14px] leading-[20px] mt-[16px] mb-[24px]">
                {t(
                  "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.",
                )}
              </Text>
              <ul className="text-gray-500 text-[14px] leading-[24px] mb-[32px] pl-[14px]">
                {[
                  'Manage up to 25 premium products',
                  'Grow your audience with 10,000 subscribers',
                  'Make data-driven decisions with advanced analytics',
                  'Priority support with 24-hour response time',
                  'Seamless integration with your favorite tools',
                ].map((feature) => (
                  <li key={feature} className="mb-[12px]">
                    {t(feature)}
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                className="bg-indigo-600 rounded-[8px] box-border text-white inline-block text-[16px] leading-[24px] font-bold tracking-wide mb-[24px] max-w-full p-[14px] text-center w-full"
              >
                {t('Claim Your Special Offer')}
              </Button>
              <Hr />
              <Text className="text-gray-500 text-[12px] leading-[16px] italic mt-[24px] mb-[6px] text-center">
                {t('Limited time offer - Upgrade now and save 20%')}
              </Text>
              <Text className="text-gray-500 text-[12px] m-0 leading-[16px] text-center">
                {t('No credit card required. 14-day free trial available.')}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default Pricing;

Pricing.PreviewProps = {
  locale: 'en',
} satisfies PricingProps;

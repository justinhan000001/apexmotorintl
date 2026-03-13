export const siteConfig = {
  name: 'Apex Motor Intl',
  nameZh: 'Apex 摩托国际',
  description: 'Full lifecycle motorcycle services: repair, maintenance, customization, race support, storage, training, transport, and insurance assistance in Davis.',
  descriptionZh: '戴维斯一站式摩托车服务：维修、保养、定制、赛道支持、寄存、培训、运输和保险协助。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexmotorintl.com',
  contact: {
    name: 'Bingyu Chen',
    phone: '909-656-2297',
    email: 'apexmotorintl@gmail.com',
    address: '720 Olive Dr Ste F, Davis',
    barArd: 'To be refined'
  }
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "alternateName": siteConfig.nameZh,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Davis",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Chinese"]
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "$xxx",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "City",
      "name": "Davis"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.5449,
        "longitude": -121.7405
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Motorcycle Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motorcycle Repair",
            "description": "Professional motorcycle repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motorcycle Storage",
            "description": "Secure motorcycle storage solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Race Support",
            "description": "Track-side technical support and race preparation"
          }
        }
      ]
    }
  }
}

export function generateFAQJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What motorcycle services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive motorcycle services including repair, maintenance, customization, race support, storage, training, and transport services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide bilingual support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide full bilingual support in English and Chinese for all our services."
        }
      },
      {
        "@type": "Question",
        "name": "What are your storage options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three storage tiers: Basic ($xxx/mo), Plus ($xxx/mo), and Pro ($xxx/mo) with varying levels of security and maintenance."
        }
      }
    ]
  }
}

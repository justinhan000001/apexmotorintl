export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageSrc?: string;
  specs?: Array<{ label: string; value: string }>;
  /** If any key info is uncertain, keep false and show “Contact Us for Details” instead of placeholders. */
  isFullySpecified: boolean;
}

export const products: Product[] = [
  {
    id: 'samurai-noir',
    name: 'Samurai Noir',
    tagline: 'Shadow Unleashed. Power Without Limits.',
    description:
      'High-performance electric motorcycle built for real terrain, quick response, and confident control.',
    imageSrc: '/media/samurai-noir.png',
    isFullySpecified: true,
    specs: [
      { label: 'Peak Power', value: '10000W' },
      { label: 'Max Torque', value: '240 N·m' },
      { label: 'Weight', value: '65kg' },
      { label: 'Battery', value: '72V 45Ah' },
      { label: 'Top Speed', value: '110km/h' },
      { label: 'Range', value: '130km' },
    ],
  },
  {
    id: 'skyleap',
    name: 'SkyLeap',
    tagline: 'Built to Endure. Ready for Real Terrain.',
    description:
      'A versatile electric motorcycle platform designed for everyday riders and expanding dealer availability.',
    imageSrc: '/media/detail-handlebar.png',
    isFullySpecified: false,
    specs: [
      { label: 'Peak Power', value: 'Contact us for details' },
      { label: 'Max Torque', value: 'Contact us for details' },
      { label: 'Weight', value: 'Contact us for details' },
      { label: 'Battery', value: 'Contact us for details' },
      { label: 'Top Speed', value: 'Contact us for details' },
      { label: 'Range', value: 'Contact us for details' },
    ],
  },
];

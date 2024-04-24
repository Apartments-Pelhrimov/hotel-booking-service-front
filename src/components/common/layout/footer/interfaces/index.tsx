import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Facebook from '@/components/common/icons/Facebook';
import { Link } from '@/components/common/layout/header/interfaces';

export const FooterMainLinks: Link[] = [
  {
    text: 'Domov',
    href: '/',
  },
  {
    text: 'Pokoje',
    href: '/test',
  },
  {
    text: 'Řídit hotel',
    href: '/test',
  },
  {
    text: 'O nás',
    href: '/test',
  },
  {
    text: 'Kontakty',
    href: '/test',
  },
];

export const FooterContacts = [
  {
    text: 'vdonat@btscr.cz',
    icon: <EnvelopeIcon />,
  },
  {
    text: '+420 774 998 246',
    icon: <PhoneIcon />,
  },
  {
    text: 'Facebook',
    icon: <Facebook />,
    link: 'https://www.facebook.com/people/Apartm%C3%A1ny-Pelh%C5%99imov/100068489602268/',
  },
];

export const FooterAddress = [
  {
    text: 'Starý Pelhřimov 45',
  },
  {
    text: '393 01 Pelhřimov',
  },
  {
    text: 'Google Maps',
    link: 'https://www.google.com/maps/place/Star%C3%BD+Pelh%C5%99imov+45,+393+01+Pelh%C5%99imov/@49.4390008,15.1932549,17z/data=!3m1!4b1!4m5!3m4!1s0x470ce5c283c188d7:0xe35abf4a5eb2af36!8m2!3d49.4390008!4d15.1954436?shorturl=1',
  },
];

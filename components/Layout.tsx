import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

// import Navbar from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../types';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
  // { name: 'Review', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false }
];

interface Props {
  title: string;
  children: ReactNode;
  meta?: PageMeta;
}

interface HeadProps {
  meta?: PageMeta;
  children?: ReactNode;
}

export const Head = ({ meta: pageMeta, children }: HeadProps) => {
  const router = useRouter();
  const meta = {
    title: process.env.NEXT_PUBLIC_APP_TITLE,
    description: 'What my app does',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_VERCEL_URL}${router.asPath}`}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.cardImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.cardImage} />
      {children}
    </NextHead>
  );
};

/**
 * Layout for public pages
 */
const MarketingLayout = ({ children, meta: pageMeta }: Props) => {
  return (
    <>
      <Head meta={pageMeta}>
        <script
          defer
          data-domain={process.env.NEXT_PUBLIC_VERCEL_URL}
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
};

/**
 * Layout for login/signup pages
 */
export const AuthLayout = ({ children, meta: pageMeta }: Props) => {
  return (
    <>
      <Head meta={pageMeta}>
        <script
          defer
          data-domain={process.env.NEXT_PUBLIC_VERCEL_URL}
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <main id="skip">{children}</main>
    </>
  );
};

export default MarketingLayout;

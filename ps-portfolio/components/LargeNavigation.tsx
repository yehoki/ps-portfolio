'use client';

import Link from 'next/link';
import NavigationLink from './NavigationLink';

interface LargeNavigationProps {
  sectionSelect: 'About' | 'Experience' | 'Projects' | 'Education';
}

const LargeNavigation: React.FC<LargeNavigationProps> = ({ sectionSelect }) => {
  return (
    <div className="hidden lg:block">
      <NavigationLink
        selected={sectionSelect === 'About'}
        href="#About"
        label="About"
      />
      <NavigationLink
        selected={sectionSelect === 'Experience'}
        href="#Experience"
        label="Experience"
      />
      <NavigationLink
        selected={sectionSelect === 'Projects'}
        href="#Projects"
        label="Projects"
      />
      <NavigationLink
        selected={sectionSelect === 'Education'}
        href="#Education"
        label="Education"
      />
    </div>
  );
};

export default LargeNavigation;

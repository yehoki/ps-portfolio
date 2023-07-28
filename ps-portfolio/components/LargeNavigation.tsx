'use client';

import useFirstRender from '@/hooks/useFirstRender';
import NavigationLink from './NavigationLink';
import useLoadingModal from '@/hooks/useLoadingModal';

interface LargeNavigationProps {
  sectionSelect: 'About' | 'Experience' | 'Projects' | 'Education';
}

const LargeNavigation: React.FC<LargeNavigationProps> = ({ sectionSelect }) => {
  const loadingModal = useLoadingModal();
  const firstRender = useFirstRender();
  return (
    <div
      className={`hidden lg:block
    ${
      firstRender.isOn
        ? 'opacity-0'
        : 'opacity-100 transition duration-[750ms] delay-[9s]'
    }
    `}
    >
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

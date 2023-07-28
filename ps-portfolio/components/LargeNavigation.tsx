'use client';

import NavigationLink from './NavigationLink';
import useLoadingModal from '@/hooks/useLoadingModal';

interface LargeNavigationProps {
  sectionSelect: 'About' | 'Experience' | 'Projects' | 'Education';
}

const LargeNavigation: React.FC<LargeNavigationProps> = ({ sectionSelect }) => {
  const loadingModal = useLoadingModal();
  return (
    <div
      className={`hidden lg:block
    ${
      loadingModal.isOpen
        ? 'opacity-0'
        : 'opacity-100 transition duration-[1s] delay-[9.5s]'
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

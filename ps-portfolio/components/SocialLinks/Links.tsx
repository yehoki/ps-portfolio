import SingleLink from './SingleLink';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Links = () => {
  return (
    <div className={`flex mt-8 items-center gap-4`}>
      <SingleLink
        icon={AiFillLinkedin}
        destination="https://www.linkedin.com/in/patryksienniak/"
      />
      <SingleLink icon={AiFillGithub} destination="https://github.com/yehoki" />
    </div>
  );
};

export default Links;

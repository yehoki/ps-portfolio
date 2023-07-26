import SingleLink from './SingleLink';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
const Links = () => {
  return (
    <div className="flex mt-8">
      <SingleLink icon={AiFillLinkedin} destination="" />
      <SingleLink icon={AiFillGithub} destination="" />
      <SingleLink icon={AiFillLinkedin} destination="" />
      <SingleLink icon={AiFillLinkedin} destination="" />
    </div>
  );
};

export default Links;

import SingleLink from './SingleLink';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
const Links = () => {
  return (
    <div className={`flex mt-8 items-center gap-4`}>
      <SingleLink
        icon={AiFillLinkedin}
        destination="https://www.linkedin.com/in/patryksienniak/"
      />
      <SingleLink icon={AiFillGithub} destination="https://github.com/yehoki" />
      <SingleLink icon={FiMail} destination="mailto:patsenn2000@gmail.com" />
    </div>
  );
};

export default Links;

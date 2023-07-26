interface ProjectItemProps {
  title: string;
  description: string;
  skills?: string[];
  screenshot: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  skills,
  screenshot,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>Skills</div>
      <div>{screenshot}</div>
    </div>
  );
};

export default ProjectItem;

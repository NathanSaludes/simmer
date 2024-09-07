interface Props {
  text: string;
}

const PlaceholderText: React.FC<
  React.HTMLAttributes<HTMLDivElement> & Props
> = ({ text, className }) => {
  return <div className={className}>&lt;{text}&gt;</div>;
};

export default PlaceholderText;

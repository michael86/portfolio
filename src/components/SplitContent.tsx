import { ReactElement, ReactHTML } from "react";

interface Props {
  content: string;
  classes: Array<string>;
  tag: keyof ReactHTML;
}

const SplitContent = ({ content, classes, tag }: Props): ReactElement => {
  const split: Array<string> = content.split("");

  const Tag = tag || "p";

  return (
    <Tag className={classes.join(" ")}>
      {split.map((character, i) =>
        character === " " ? <span key={i}>&nbsp;</span> : <span key={i}>{character}</span>
      )}
    </Tag>
  );
};

export default SplitContent;

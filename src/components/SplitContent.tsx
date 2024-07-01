import { ReactElement, ReactHTML } from "react";

interface Props {
  content: string;
  classes: Array<string>;
  tag: keyof ReactHTML;
}

/**
 * Will split a given string into a series of spans, contained within a parent tag.
 * @param param0 {content: string - normally what you want to be displayed, clases: [string] - array of class names, tag: string - html entity to be used}
 * @returns React Element
 */
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

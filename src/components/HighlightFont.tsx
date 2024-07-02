import { FC } from "react";

type Props = { text: string };

const HighlightFont: FC<Props> = ({ text }) => <span className="highlight">{text}</span>;

export default HighlightFont;

/// <reference types="react" />
declare type AlignType = "left" | "center" | "right";
interface Props {
    value: number;
    transition?: number;
    suffix?: string;
    id?: string;
    className?: string;
    align?: AlignType;
}
declare const NumberCounter: (props: Props) => JSX.Element;
export default NumberCounter;

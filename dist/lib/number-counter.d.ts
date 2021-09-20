/// <reference types="react" />
interface Props {
    value: number;
    transition: number;
    suffix: string;
    id?: string;
    className?: string;
}
declare const NumberCounter: (props: Props) => JSX.Element;
export default NumberCounter;

type Props = {
    src: string;
    alt: string;
    className?: string;
    height: number;
    width: number;
    srcLight?: string;
    srcDark?: string;
};

const Source = (props: { src?: string }) => {
    if (!props.src) return null;

    return <source srcSet={props.src} />;
};

const Image = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <picture>
            <Source src={props.srcDark}></Source>
            <Source src={props.srcLight}></Source>
            <img {...rest} alt={props.alt} />
        </picture>
    );
};

export default Image;

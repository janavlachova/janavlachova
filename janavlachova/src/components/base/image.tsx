type Props = {
    src: string;
    alt: string;
    className?: string;
    height: number;
    width: number;
    srcLight?: string;
    srcDark?: string;
};

const Source = (props: { src?: string; media: string }) => {
    if (!props.src) return null;

    return <source srcSet={props.src} media={props.media} />;
};

const Image = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <picture>
            <Source
                src={props.srcDark}
                media="(prefers-color-scheme: dark)"
            ></Source>
            <Source
                src={props.srcLight}
                media="(prefers-color-scheme: light)"
            ></Source>
            <img {...rest} alt={props.alt} />
        </picture>
    );
};

export default Image;

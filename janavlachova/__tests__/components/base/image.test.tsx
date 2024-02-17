import { render, screen, cleanup } from "@testing-library/react";
import Image from "@/components/base/image";
import { expect, describe, it, afterEach } from "vitest";

describe("Image component", () => {
    afterEach(() => cleanup());

    it("renders the image with the correct src and alt attributes", () => {
        const src = "path/to/image.jpg";
        const alt = "Image alt text";
        const height = 200;
        const width = 300;

        render(<Image src={src} alt={alt} height={height} width={width} />);

        const imageElement = screen.getByAltText(alt);
        expect(imageElement.getAttribute("src")).toBe(src);
    });

    it("renders the image with the correct className", () => {
        const src = "path/to/image.jpg";
        const alt = "Image alt text";
        const className = "custom-class";
        const height = 200;
        const width = 300;

        render(
            <Image
                src={src}
                alt={alt}
                className={className}
                height={height}
                width={width}
            />,
        );

        const imageElement = screen.getByAltText(alt);
        expect(imageElement.classList).toContain(className);
    });

    it("renders the image with the correct srcSet for light and dark mode", () => {
        const src = "path/to/image.jpg";
        const alt = "Image alt text";
        const height = 200;
        const width = 300;
        const srcLight = "path/to/image-light.jpg";
        const srcDark = "path/to/image-dark.jpg";

        const { container } = render(
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
                srcLight={srcLight}
                srcDark={srcDark}
            />,
        );

        const sourceElements = container.querySelectorAll("source");
        expect(sourceElements).toHaveLength(2);
        expect(sourceElements[0].getAttribute("srcSet")).toBe(srcDark);
        expect(sourceElements[1].getAttribute("srcSet")).toBe(srcLight);
    });
});

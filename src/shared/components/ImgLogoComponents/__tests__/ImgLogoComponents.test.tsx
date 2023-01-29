import ImgLogoComponents from "../ImgLogoComponents";
import { render } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */

describe('ImgLogoComponents', () => {
    it('should render', function() {
        const { container } = render(<ImgLogoComponents Logo="LogoCompleteBlueWhite" className="test" />);
        expect(container).toMatchSnapshot();
    });
});
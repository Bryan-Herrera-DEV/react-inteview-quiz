import { ICommonComponent } from '@/shared/interfaces/CommonComponent.interface';
import { TLogos } from '../../interfaces/logos.interface';

import LogoCompleteBlueWhite from '../../assets/logos/ReactInterviewQuiz-blue-white.webp';
import LogoCompleteWhiteBlue from '../../assets/logos/ReactInterviewQuiz-white-blue.webp';
import Short_LogoCompleteBlueWhite from '../../assets/logos/Short_ReactInterviewQuiz-blue-white.webp';
import Short_LogoCompleteWhiteBlue from '../../assets/logos/Short_ReactInterviewQuiz-white-blue.webp';


// convert in required optional parameters of the IImgLogoComponents interface
interface IImgLogoComponents extends Required<Pick<ICommonComponent, 'className'>> {
    Logo: TLogos
}


const ImgLogoComponents = ({ Logo, className }: IImgLogoComponents) => {
    switch (Logo) {
        case 'LogoCompleteBlueWhite':
            return <img src={LogoCompleteBlueWhite} alt="LogoCompleteBlueWhite" className={className} />
        case 'LogoCompleteWhiteBlue':
            return <img src={LogoCompleteWhiteBlue} alt="LogoCompleteWhiteBlue" className={className} />
        case 'Short_LogoCompleteBlueWhite':
            return <img src={Short_LogoCompleteBlueWhite} alt="Short_LogoCompleteBlueWhite" className={className} />
        case 'Short_LogoCompleteWhiteBlue':
            return <img src={Short_LogoCompleteWhiteBlue} alt="Short_LogoCompleteWhiteBlue" className={className} />
        default:
            return <img src={LogoCompleteBlueWhite} alt="LogoCompleteBlueWhite" className={className} />
    }
}

export default ImgLogoComponents

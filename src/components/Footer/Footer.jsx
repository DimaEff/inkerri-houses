import React from 'react';
import {Typography} from "@material-ui/core";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import FeedbackFormMini from "../FeedbackForm/FeedbackFormMini";
import FooterPaper from "./FooterPaper";
import FooterMenu from "./FooterMenu";
import FooterText from "../common/Text/FooterText";


const Footer = () => {

    return (
        <AppContainer withoutTitle>
            <AppContainerItem margin lg={4} md={4} sm={12} xs={12}>
                <FooterPaper/>
            </AppContainerItem>
            <AppContainerItem margin lg={4} md={4} sm={12} xs={12}>
                <FooterMenu />
            </AppContainerItem>
            <AppContainerItem margin lg={4} md={4} sm={12} xs={12}>
                <div style={{display: 'flex', flexFlow: 'column'}}>
                    <FooterText>
                        Отправить заявку
                    </FooterText>
                    <FeedbackFormMini/>
                </div>
            </AppContainerItem>


            {/*<div style={{display: 'flex', flexFlow: 'column'}}>*/}
            {/*    <FooterPaper/>*/}

            {/*    <div style={{height: '200px'}}>*/}
            {/*        <div style={{display: 'flex', flexFlow: 'column', marginRight: '45px',}}>*/}
            {/*            <Typography style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>*/}
            {/*                Услуги*/}
            {/*            </Typography>*/}
            {/*        </div>*/}
            {/*        <div style={{display: 'flex', flexFlow: 'column'}}>*/}
            {/*            <Typography style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>*/}
            {/*                Меню*/}
            {/*            </Typography>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div style={{display: 'flex', flexFlow: 'column'}}>*/}
            {/*        <Typography style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>*/}
            {/*            Отправить заявку*/}
            {/*        </Typography>*/}
            {/*        <FeedbackFormMini/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </AppContainer>
    );
};

export default Footer;
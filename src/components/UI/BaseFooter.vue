<template>
    <div class="footerContainer">
        <div class="footerRow">
            <div class="logo">
                <a class="footer-brand-logo"><img src="../logos/netow_logo_small.png" alt=""></a>
            </div>
            <div class="location">
                <h3>Office</h3>
                <P>60 Bode Thomas</P>
                <P class="secondline">Street, Surulere, Lagos</P>
                <div class="p">
                    <a href="">infor@netowsolutions.com</a>
                </div>
                <div class="p">
                    <a href="">+234 811 288 3405</a>
                </div>
            </div>
            <div class="links">
                <h3>Links</h3>
                <ul class="footerLinks">
                    <navbar-item>Blog</navbar-item>
                    <navbar-item>About Us</navbar-item>
                    <navbar-item>services</navbar-item>
                    <navbar-item>Careers</navbar-item>
                </ul>
            </div>
            <div class="socials">
                <h3>Socials</h3>
                <div class="socialIcons">
                    <base-icon-button mode="iconButton icon">
                        <icon-facebook></icon-facebook>
                    </base-icon-button>
                    <base-icon-button mode="iconButton icon">
                        <icon-twitter></icon-twitter>
                    </base-icon-button>
                    <base-icon-button mode="iconButton icon">
                        <icon-instagram></icon-instagram>
                    </base-icon-button>
                    <base-icon-button mode="iconButton">
                        <icon-linkedin></icon-linkedin>
                    </base-icon-button>
                </div>
            </div>
        </div>
        <div class="copyRightRow">
            ©2021 Netow Solutions. All Right Reserved
        </div>
    </div>
</template>

<script>
import BaseIconButton from './BaseIconButton.vue';
import NavbarItem from "../NavbarItem.vue";
import IconFacebook from "../icons/socials/IconFacebook.vue";
import IconTwitter from '../icons/socials/IconTwitter.vue';
import IconInstagram from '../icons/socials/IconInstagram.vue';
import IconLinkedin from '../icons/socials/IconLinkedin.vue';

export default {
    components: {
        NavbarItem,
        BaseIconButton,
        IconFacebook,
        IconTwitter,
        IconInstagram,
        IconLinkedin

    }
}
</script>

<style scoped>
.footerContainer {
    background-color: #20345c;
    color: #fff;
    padding: 100px 224px;
}

.footerRow {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    width: 176px;
}

.footer-brand-logo {
    padding: 1.6px 8px;
    border: 1px solid;
    border-radius: 6px;
    color: #fff;
    background-color: #fff;
    display: inline-block;
    font-size: 20px;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
    text-align: left;
    margin-right: 48px;
}

h3 {
    margin-bottom: 32px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

.socialIcons {
    display: flex;
}

.iconButton {
    overflow: visible;
    width: 15px;
    background-color: transparent;
    border: none;
}

.icon {
    color: #fff;
    margin-right: 20px;
}

.footerLinks {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 194px;
    /* padding: 0px 15px; */
    margin-top: -8px;
    margin-left: -24px;
}

.location {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0px 30px 0px 48px;
}

a {
    text-decoration: none;
    color: #fff;
}

.secondline {
    margin-bottom: 16px;
}

.p {
    margin-bottom: 16px;

}

.copyRightRow {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(196, 196, 196, 0.5);
    padding-top: 16px;
}
</style>
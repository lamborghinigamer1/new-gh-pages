import { SocialInfo } from "./types/SocialInfo";
import Twitter from '/twitter.svg';
import Youtube from '/youtube.svg';
import Discord from '/discord.svg';

const socials: SocialInfo[] = [{
    id: 1,
    title: "mrborghini_",
    url: "https://twitter.com/mrborghini_",
    image: Twitter,
    alt: "twitter-logo"
},
{
    id: 2,
    title: "mrborghini",
    url: "https://www.youtube.com/channel/UCnRW7gN7dpmD7rCixHKHXfw",
    image: Youtube,
    alt: "youtube-logo"
}, {
    id: 3,
    title: "Lambo community server",
    url: "https://discord.gg/z48t39mW27",
    image: Discord,
    alt: "discord-logo"
}];

function sortSocials(socials: SocialInfo[]) {
    for (let i = 0; i < socials.length - 1; i++) {
        for (let j = 0; j < socials.length - 1; j++) {
            if (socials[j].id > socials[j + 1].id) {
                const temp = socials[j];
                socials[j] = socials[j + 1];
                socials[j + 1] = temp;
            }
        }
    }
    return socials;
}

const mySocials: SocialInfo[] = sortSocials(socials);


export { mySocials }
import { ISocialMedia } from './isocial-media';

export class SocialMedia implements ISocialMedia {

    public static readonly REG_EXP_FACEBOOK = '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\?=.-]*)*\\/?$';
    public static readonly REG_EXP_TWITTER = '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\?=.-]*)*\\/?$';
    public static readonly REG_EXP_INSTAGRAM = '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\?=.-]*)*\\/?$';

    id: number;
    facebook?: string;
    twitter?: string;
    instagram?: string;

    constructor(id: number, facebook = '', twitter = '', instagram = ''){
        this.id = id;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
    }

}

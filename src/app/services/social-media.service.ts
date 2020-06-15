import { Injectable } from '@angular/core';
import { ISocialMedia } from '../models/isocial-media';
import { SocialMedia } from '../models/social-media';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  /* VARIABLES */
  socialMedias: Array<ISocialMedia> = [];

  /* CONSTRUCTORS */
  constructor() {
    this.createSocialMedias();
  }

  /* GETTERS AND SETTERS */
  getSocialMedia(id: number): ISocialMedia{
    return this.socialMedias[id];
  }

  addSocialMedia(facebook?: string, twitter?: string, instagram?: string): void{
    const socialMedia: ISocialMedia = new SocialMedia(this.socialMedias.length, facebook, twitter, instagram);
    this.socialMedias.push(socialMedia);
  }

  getSocialMedias(): Array<ISocialMedia>{
    return this.socialMedias;
  }

  /* METHODS OF INSTANCE */
  createSocialMedias(): void{
    this.addSocialMedia();
    this.addSocialMedia();
    this.addSocialMedia();
  }

}

import styles from "./style.css?inline";
import { ShadowWrapper } from "@uploadcare/blocks";

export class CustomFileUploader extends ShadowWrapper {
  static template = /* HTML */ `
    <lr-simple-btn></lr-simple-btn>

    <lr-modal strokes block-body-scrolling>
      <lr-start-from>
        <lr-drop-area with-icon clickable></lr-drop-area>
        <lr-source-list wrap></lr-source-list>
        <lr-copyright></lr-copyright>
      </lr-start-from>
      <lr-upload-list></lr-upload-list>
      <lr-camera-source></lr-camera-source>
      <lr-url-source></lr-url-source>
      <lr-external-source></lr-external-source>
      <lr-cloud-image-editor></lr-cloud-image-editor>
      <lr-unsplash-source></lr-unsplash-source>
    </lr-modal>

    <lr-message-box></lr-message-box>
    <lr-progress-bar-common></lr-progress-bar-common>
  `;
}

CustomFileUploader.shadowStyles = styles;

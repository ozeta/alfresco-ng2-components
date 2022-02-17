/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_TASKS_APP_MATERIAL_ICON: string = 'favorite_border';

/* spellchecker: disable */
export class IconModel {
    private iconsMDL: Map<string, string>;

    constructor() {
        this.initIconsMDL();
    }

    mapGlyphiconToMaterialDesignIcons(icon: string) {
        return this.iconsMDL.get(icon) ? this.iconsMDL.get(icon) : DEFAULT_TASKS_APP_MATERIAL_ICON;
    }

    /**
     * Map all the bootstrap glyphicon icons with Material design material icon
     */
    initIconsMDL() {
        this.iconsMDL = new Map<string, string>();

        this.iconsMDL.set('glyphicon-asterisk', 'ac_unit');
        this.iconsMDL.set('glyphicon-plus', 'add');
        this.iconsMDL.set('glyphicon-euro', 'euro_symbol');
        this.iconsMDL.set('glyphicon-cloud', 'cloud');
        this.iconsMDL.set('glyphicon-envelope', 'mail');
        this.iconsMDL.set('glyphicon-pencil', 'create');
        this.iconsMDL.set('glyphicon-glass', 'local_bar');
        this.iconsMDL.set('glyphicon-music', 'music_note');
        this.iconsMDL.set('glyphicon-search', 'search');
        this.iconsMDL.set('glyphicon-heart', 'favorite');
        this.iconsMDL.set('glyphicon-heart-empty', 'favorite_border');
        this.iconsMDL.set('glyphicon-star', 'star');
        this.iconsMDL.set('glyphicon-star-empty', 'star_border');
        this.iconsMDL.set('glyphicon-user', 'person');
        this.iconsMDL.set('glyphicon-film', 'movie_creation');
        this.iconsMDL.set('glyphicon-th-large', 'view_comfy');
        this.iconsMDL.set('glyphicon-th', 'dashboard');
        this.iconsMDL.set('glyphicon-th-list', 'list');
        this.iconsMDL.set('glyphicon-ok', 'done');
        this.iconsMDL.set('glyphicon-remove', 'cancel');
        this.iconsMDL.set('glyphicon-zoom-in', 'zoom_in');
        this.iconsMDL.set('glyphicon-zoom-out', 'zoom_out');
        this.iconsMDL.set('glyphicon-off', 'highlight_off');
        this.iconsMDL.set('glyphicon-signal', 'signal_cellular_4_bar');
        this.iconsMDL.set('glyphicon-cog', 'settings');
        this.iconsMDL.set('glyphicon-trash', 'delete');
        this.iconsMDL.set('glyphicon-home', 'home');
        this.iconsMDL.set('glyphicon-file', 'insert_drive_file');
        this.iconsMDL.set('glyphicon-time', 'access_time');
        this.iconsMDL.set('glyphicon-road', 'map');
        this.iconsMDL.set('glyphicon-download-alt', 'file_download');
        this.iconsMDL.set('glyphicon-download', 'file_download');
        this.iconsMDL.set('glyphicon-upload', 'file_upload');
        this.iconsMDL.set('glyphicon-inbox', 'inbox');
        this.iconsMDL.set('glyphicon-play-circle', 'play_circle_outline');
        this.iconsMDL.set('glyphicon-repeat', 'refresh');
        this.iconsMDL.set('glyphicon-refresh', 'sync');
        this.iconsMDL.set('glyphicon-list-alt', 'event_note');
        this.iconsMDL.set('glyphicon-lock', 'lock_outline');
        this.iconsMDL.set('glyphicon-flag', 'assistant_photo');
        this.iconsMDL.set('glyphicon-headphones', 'headset');
        this.iconsMDL.set('glyphicon-volume-up', 'volume_up');
        this.iconsMDL.set('glyphicon-tag', 'local_offer');
        this.iconsMDL.set('glyphicon-tags', 'local_offer');
        this.iconsMDL.set('glyphicon-book', 'library_books');
        this.iconsMDL.set('glyphicon-bookmark', 'collections_bookmark');
        this.iconsMDL.set('glyphicon-print', 'local_printshop');
        this.iconsMDL.set('glyphicon-camera', 'local_see');
        this.iconsMDL.set('glyphicon-list', 'view_list');
        this.iconsMDL.set('glyphicon-facetime-video', 'video_call');
        this.iconsMDL.set('glyphicon-picture', 'photo');
        this.iconsMDL.set('glyphicon-map-marker', 'add_location');
        this.iconsMDL.set('glyphicon-adjust', 'brightness_4');
        this.iconsMDL.set('glyphicon-tint', 'invert_colors');
        this.iconsMDL.set('glyphicon-edit', 'edit');
        this.iconsMDL.set('glyphicon-share', 'share');
        this.iconsMDL.set('glyphicon-check', 'assignment_turned_in');
        this.iconsMDL.set('glyphicon-move', 'open_with');
        this.iconsMDL.set('glyphicon-play', 'play_arrow');
        this.iconsMDL.set('glyphicon-eject', 'eject');
        this.iconsMDL.set('glyphicon-plus-sign', 'add_circle');
        this.iconsMDL.set('glyphicon-minus-sign', 'remove_circle');
        this.iconsMDL.set('glyphicon-remove-sign', 'cancel');
        this.iconsMDL.set('glyphicon-ok-sign', 'check_circle');
        this.iconsMDL.set('glyphicon-question-sign', 'help');
        this.iconsMDL.set('glyphicon-info-sign', 'info');
        this.iconsMDL.set('glyphicon-screenshot', 'flare');
        this.iconsMDL.set('glyphicon-remove-circle', 'cancel');
        this.iconsMDL.set('glyphicon-ok-circle', 'add_circle');
        this.iconsMDL.set('glyphicon-ban-circle', 'block');
        this.iconsMDL.set('glyphicon-share-alt', 'redo');
        this.iconsMDL.set('glyphicon-exclamation-sign', 'error');
        this.iconsMDL.set('glyphicon-gift', 'giftcard');
        this.iconsMDL.set('glyphicon-leaf', 'spa');
        this.iconsMDL.set('glyphicon-fire', 'whatshot');
        this.iconsMDL.set('glyphicon-eye-open', 'remove_red_eye');
        this.iconsMDL.set('glyphicon-eye-close', 'remove_red_eye');
        this.iconsMDL.set('glyphicon-warning-sign', 'warning');
        this.iconsMDL.set('glyphicon-plane', 'airplanemode_active');
        this.iconsMDL.set('glyphicon-calendar', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-random', 'shuffle');
        this.iconsMDL.set('glyphicon-comment', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-magnet', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-retweet', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-shopping-cart', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-folder-close', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-folder-open', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-hdd', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-bullhorn', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-bell', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-certificate', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-thumbs-up', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-thumbs-down', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-hand-left', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-globe', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-wrench', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tasks', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-filter', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-briefcase', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-dashboard', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-paperclip', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-link', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-phone', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-pushpin', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-usd', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-gbp', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-sort', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-flash', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-record', 'radio_button_checked');
        this.iconsMDL.set('glyphicon-save', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-open', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-saved', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-send', 'send');
        this.iconsMDL.set('glyphicon-floppy-disk', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-credit-card', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cutlery', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-earphone', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-phone-alt', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tower', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-stats', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cloud-download', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cloud-upload', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tree-conifer', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tree-deciduous', DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-align-left', 'format_align_left');
    }
}

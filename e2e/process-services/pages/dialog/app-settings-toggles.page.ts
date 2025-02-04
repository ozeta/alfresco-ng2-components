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

import { TogglePage } from '@alfresco/adf-testing';
import { $ } from 'protractor';

export class AppSettingsTogglesPage {

    togglePage = new TogglePage();

    showDetailsHeaderToggle = $('#adf-show-header');
    showTaskFilterIconsToggle = $('#adf-show-task-filter-icon');
    showProcessFilterIconsToggle = $('#adf-show-process-filter-icon');

    async enableShowHeader(): Promise<void> {
        await this.togglePage.enableToggle(this.showDetailsHeaderToggle);
    }

    async disableShowHeader(): Promise<void> {
        await this.togglePage.disableToggle(this.showDetailsHeaderToggle);
    }

    async enableTaskFiltersIcon(): Promise<void> {
        await this.togglePage.enableToggle(this.showTaskFilterIconsToggle);
    }

    async enableProcessFiltersIcon(): Promise<void> {
        await this.togglePage.enableToggle(this.showProcessFilterIconsToggle);
    }

}

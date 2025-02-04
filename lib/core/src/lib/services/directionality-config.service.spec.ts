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

import { TestBed } from '@angular/core/testing';
import { CoreTestingModule } from '../testing/core.testing.module';
import { setupTestBed } from '../testing/setup-test-bed';
import { UserPreferencesService } from '../common/services/user-preferences.service';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core.module';

describe('DirectionalityConfigService', () => {
    let userPreferencesService: UserPreferencesService;

    setupTestBed({
        imports: [
            TranslateModule.forRoot(),
            CoreModule.forRoot(),
            CoreTestingModule
        ]
    });

    beforeEach(() => {
        userPreferencesService = TestBed.inject(UserPreferencesService);
    });

    it('should set document direction on textOrientation event to `rtl`', () => {
        userPreferencesService.set('textOrientation', 'rtl');
        expect(document.body.getAttribute('dir')).toBe('rtl');
    });

    it('should set document direction on textOrientation event to `ltr`', () => {
        userPreferencesService.set('textOrientation', 'ltr');
        expect(document.body.getAttribute('dir')).toBe('ltr');
    });
});

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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldTypes } from '../core/form-field-types';
import { FormFieldModel } from '../core/form-field.model';
import { FormModel } from '../core/form.model';
import { CheckboxWidgetComponent } from './checkbox.widget';
import { setupTestBed } from '../../../../testing/setup-test-bed';
import { FormBaseModule } from '../../../form-base.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderService } from '../../../../services/translate-loader.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreTestingModule } from '../../../../testing';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('CheckboxWidgetComponent', () => {

    let widget: CheckboxWidgetComponent;
    let fixture: ComponentFixture<CheckboxWidgetComponent>;
    let element: HTMLElement;

    setupTestBed({
        imports: [
            TranslateModule.forRoot(),
            CoreTestingModule,
            FormBaseModule,
            MatCheckboxModule,
            MatTooltipModule
        ],
        providers: [
            { provide: TranslateLoader, useClass: TranslateLoaderService }
        ]
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxWidgetComponent);

        widget = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    afterEach(() => fixture.destroy());

    describe('when template is ready', () => {

        beforeEach(() => {
            widget.field = new FormFieldModel(new FormModel({ taskId: 'fake-task-id' }), {
                id: 'check-id',
                name: 'check-name',
                value: '',
                type: FormFieldTypes.BOOLEAN,
                readOnly: false,
                required: true
            });
        });

        it('should be marked as invalid when required after interaction', async () => {
            const checkbox = element.querySelector('mat-checkbox');
            expect(element.querySelector('.adf-invalid')).toBeFalsy();

            checkbox.dispatchEvent(new Event('click'));
            checkbox.dispatchEvent(new Event('click'));

            fixture.detectChanges();
            await fixture.whenStable();

            expect(element.querySelector('.adf-invalid')).toBeTruthy();
        });

        it('should be able to display label with asterisk', async () => {
            fixture.detectChanges();
            await fixture.whenStable();

            const asterisk: HTMLElement = element.querySelector('.adf-asterisk');

            expect(asterisk).toBeTruthy();
            expect(asterisk.textContent).toEqual('*');
        });

        it('should be checked if boolean true is passed', async () => {
            widget.field.value = true;
            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
            const checkbox = fixture.debugElement.nativeElement.querySelector('mat-checkbox input');
            expect(checkbox.getAttribute('aria-checked')).toBe('true');
        });

        it('should not be checked if false is passed', async () => {
            widget.field.value = false;

            fixture.detectChanges();
            await fixture.whenStable();

            const checkbox = fixture.debugElement.nativeElement.querySelector('mat-checkbox input');
            expect(checkbox.getAttribute('aria-checked')).toBe('false');
        });

        it('should display tooltip when tooltip is set', async () => {
            widget.field.tooltip = 'checkbox widget';

            fixture.detectChanges();
            await fixture.whenStable();

            const checkbox = fixture.debugElement.nativeElement.querySelector('#check-id');
            const tooltip = checkbox.getAttribute('ng-reflect-message');

            expect(tooltip).toEqual(widget.field.tooltip);
        });
    });
});

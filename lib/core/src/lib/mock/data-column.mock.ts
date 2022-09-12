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

import { DataColumn } from '../datatable/data/data-column.model';

export const getDataColumnMock = <T = unknown>(column: Partial<DataColumn<T>> = {}): DataColumn<T> => ({
    id: 'columnId',
    key: 'key',
    type: 'text',
    format: 'format',
    sortable: false,
    title: 'title',
    srTitle: 'srTitle',
    cssClass: 'cssClass',
    template: undefined,
    copyContent: false,
    editable: false,
    focus: false,
    sortingKey: 'sortingKey',
    header: undefined,
    draggable: false,
    isHidden: false,
    customData: undefined,
    ...column
});
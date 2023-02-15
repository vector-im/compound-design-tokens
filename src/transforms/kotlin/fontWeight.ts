/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Platform } from "style-dictionary/types/Platform";
import { TransformedToken } from "style-dictionary/types/TransformedToken";
import { camelCase } from "lodash";

/**
 * A transformer to font weight for Material 3
 */
export default {
  type: "value",
  matcher: function (token: TransformedToken): boolean {
    const attrs = token.attributes ?? {};
    return attrs.category === "font" && attrs.type === "weight";
  },
  transformer: function (token: TransformedToken): string {
    switch (token.value) {
      case "700":
        return `FontWeight.Bold`;
      case "500":
        return `FontWeight.Medium`;
      case "400":
      default:
        return `FontWeight.Regular`;
    }
  },
};
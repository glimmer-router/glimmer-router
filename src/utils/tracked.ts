import { tracked } from '@glimmer/component';
import { getOwner } from '@glimmer/di';
export const REGISTER_TRACKING = Symbol('register-component');

/*
 * Lifted from https://github.com/shahata/dasherize/blob/master/index.js
 */
function dashCase(str) {
  return str.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g, function (s, i) {
    return (i > 0 ? '-' : '') + s.toLowerCase();
  });
}

export default function trackService(propertyWithService): any {
  return (baseConstructor) => {
    let propertyCache = Symbol('property-cache');

    class SubClassWithInjection extends baseConstructor {
      @tracked
      get [propertyWithService]() {
        if (!this[propertyCache]) {
          let service = getOwner(this).lookup(`service:${dashCase(propertyWithService)}`);
          if (service[REGISTER_TRACKING]) {
            service[REGISTER_TRACKING](() => this[propertyWithService] = service);
          }
          this[propertyCache] = service;
        }
        return this[propertyCache];
      }
      set [propertyWithService](value) {
        this[propertyCache] = value;
      }
    }

    return SubClassWithInjection;
  }
}

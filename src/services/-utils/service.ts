import { REGISTER_TRACKING } from '../../utils/tracked';

export default class Service {

  _tracking = [];

  static create(options) {
    return new this(options);
  }

  constructor(options) {
    Object.assign(this, options);
  }

  [REGISTER_TRACKING](instance) {
    this._tracking.push(instance);
  }

  notify() {
    this._tracking.forEach(t => t());
  }
}
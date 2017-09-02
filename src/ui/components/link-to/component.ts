import Component from '@glimmer/component';
import trackService from '../../../utils/tracked';
import Router from '../../../services/router';

const isModifiedEvent = (event: MouseEvent) =>
!!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

@trackService('router')
export default class LinkTo extends Component {
    router: Router;

    handleClick(event: MouseEvent): void {
        if (this.args.onClick) {
            this.args.onClick(event);
        }

        if(
            !event.defaultPrevented &&
            event.button === 0 &&
            !this.args.target &&
            !isModifiedEvent(event)
        ) {            
            event.preventDefault();
            
            const { push } = this.router.history;

            push(this.args.path);
        }
    }
};

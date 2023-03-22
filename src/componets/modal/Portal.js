import React from 'react';
import * as ReactDOM from 'react-dom';



const portalRoot = document.getElementById('portal');

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // Элемент портала добавляется в DOM-дерево после того, как
        // потомки компонента Modal будут смонтированы, это значит,
        // что потомки будут монтироваться на неприсоединённом DOM-узле.
        // Если дочерний компонент должен быть присоединён к DOM-дереву
        // сразу при подключении, например, для замеров DOM-узла,
        // или вызова в потомке 'autoFocus', добавьте в компонент Modal
        // состояние и рендерите потомков только тогда, когда
        // компонент Modal уже вставлен в DOM-дерево.
        portalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
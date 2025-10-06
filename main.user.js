// ==UserScript==
// @name         新科学人查看更多
// @namespace    https://github.com/gui-ying233/MoreFreeNS
// @version      1.0.0
// @description  去除新科学人的订阅提示并显示更多内容（不一定能完全显示）
// @author       鬼影233
// @license      MIT
// @match        https://www.newscientist.com/article/*
// @icon         http://newscientist.com/favicon.ico
// @supportURL   https://github.com/gui-ying233/MoreFreeNS/issues
// @run-at       document-start
// ==/UserScript==

(() => {
    "use strict";
    const originalRemoveChild = Element.prototype.removeChild;
    Element.prototype.removeChild = function (...args) {
        if (args[0].closest(".ArticleContent")) return args[0];
        return originalRemoveChild.apply(this, args);
    };
    document.head.appendChild(
        Object.assign(document.createElement("style"), {
            textContent:
            '.ArticlePageWrapper .ArticleContent::after{background:none!important}#subscription-barrier{display:none}',
        })
    );
})();

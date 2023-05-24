// ==UserScript==
// @name          joetamper
// @namespace     https://github.com/grzbiet/joetamper/
// @author        grzbiet
// @version       0.23.5.24
// @description   joemonster.org enhancements
// @match         https://joemonster.org/*
// @grant         GM_registerMenuCommand
// @grant         GM_setValue
// @grant         GM_getValue
// @updateURL     https://github.com/grzbiet/joetamper/raw/main/joetamper.user.js
// @downloadURL   https://github.com/grzbiet/joetamper/raw/main/joetamper.user.js
// @run-at        document-end
// ==/UserScript==

(function() {
        //TODO: objazd
        let next_url = document.body.querySelector("#older_files").querySelector("a").href;
        let fileFile = document.body.querySelector("#fileFile");
        if (fileFile.firstElementChild.tagName != "IMG")
        {
                document.body.querySelector("#fileFile").ondblclick=function() { window.location.href=next_url; }
        }
        else
        {
                document.body.querySelector("#fileFile").onclick=function() { window.location.href=next_url; }
        }
})();

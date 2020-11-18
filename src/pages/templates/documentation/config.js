let config = {
    "template": {
        "name":  "documentation",

        "menu": {
            "mode": [null, "uk-light", "uk-dark"], // Choice one
            "position": ["left", "right"], // Choice one
            "background": [  // Choice one
                {
                    "type": "class",
                    "class": [null, "uk-background-default", "uk-background-muted", "uk-background-primary", "uk-background-secondary"] // Choice one
                },
                {
                    "type": "image",
                    "attributes": {
                        "data-src": "assets/images/**/*.*",
                        "data-srcset": [null, "assets/images/**/*.* 640w, assets/images/**/*.* 960w, assets/images/**/*.* 1200w, assets/images/**/*.* 1600w"],
                        "data-sizes": [null, "(min-width: 650px) 650px, 100vw"],
                        "class": "uk-background-cover uk-background-norepeat uk-background-fixed",
                    }
                },
                {
                    "type": "video",
                    "attributes": { // All <video> attributes possible
                        "src": "assets/videos/**/*.*",
                        "autoplay": true,
                        "loop": true,
                        "muted": true,
                        "playsinline": true,
                        "poster": "assets/images/**/*.*"
                    }
                }
            ]
        },
        "nav": {
            "class": "uk-nav-default", // All UIKit Navbar class
            "scrollspy": "closest: li; scroll: true;" // All UIKit Scrollspy options
        },
        "navbar": {
            "sticky": "show-on-up: true; animation: uk-animation-slide-top;" // All UIKit Sticky options
        }
    },
    
    "content": {
        "menu": {
            "icon": [ // Choice one - All FW component possible
                {
                    "type": "uk-icon",
                    "attributes": { // All <span> attributes possible
                        "uk-icon": "icon: uikit; ratio: 2;",
                        "class": null
                    }
                },
                {
                    "type": ["uk-img", "uk-svg"],
                    "attributes": { // All <img/> attributes possible
                        "data-src": "assets/images/**/*.*",
                        "width": 0,
                        "height": 0,
                        "alt": "Website logo",
                        "class": null
                    }
                }
            ],
            "title": "FOX Website",
            "buttons": [ // All FW component possible
                {
                    "type": "uk-button",
                    "tag": "a",
                    "content": "Get started",
                    "attributes": { // All <a> attributes possible
                        "href": "**/*.html",
                        "class": "uk-button"
                    }
                }
            ]
        },

        "navbar": {
            "icon": [ // Choice one - All FW component possible
                {
                    "type": "uk-icon",
                    "attributes": { // All <span> attributes possible
                        "uk-icon": "icon: uikit; ratio: 2;",
                        "class": null
                    }
                },
                {
                    "type": ["uk-img", "uk-svg"],
                    "attributes": { // All <img/> attributes possible
                        "data-src": "assets/images/**/*.*",
                        "width": 0,
                        "height": 0,
                        "alt": "Website logo",
                        "class": null
                    }
                }
            ],

            "buttons": [ // All FW component possible
                {
                    "type": "uk-icon",
                    "tag": "a",
                    "attributes": { // All <a> attributes possible
                        "uk-icon": "icon: github; ratio: 1.5;",
                        "href": "https://github.com/de-sign/uikit-starter",
                        "target": "_blank",
                        "rel": "noreferrer noopener"
                    }
                }
            ]
        },

        "sections": [ // See NJK main_content block on doc.html
            "section_1.html",
            "section_2.html"
        ]
    }
};